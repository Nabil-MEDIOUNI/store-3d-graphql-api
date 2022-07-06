const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const socket = require('socket.io');
const schedule = require('node-schedule');
const fetch = require('node-fetch');

require('dotenv').config();

const { addUser, removeUser, updateeUser, getUser } = require('./users');

const Device = require('./src/models/device');

const typeDefs = require('./src/graphql/typedefs');
const resolvers = require('./src/graphql/resolvers');

const authRoutes = require('./src/api/routes/auth');
const messRoutes = require('./src/api/routes/message');

require('./db/config').connect();
require('./src/helpers/uploadFile').cloudinaryConfig();

const app = express();

const serve = app.listen(process.env.PORT);

const io = socket(serve);

io.on('connect', (socket) => {
  socket.on('joinvue', () => {
    socket.join('store');
  });

  socket.on('join', (user, callback) => {
    socket.join('user');
    socket.emit('message', {
      role: user.is_admin ? 'admin' : 'client',
      user,
      text: `${user.full_name}, welcome to store `,
    });

    socket.broadcast
      .to('user')
      .emit('message', { user, text: `${user.full_name} has joined!` });

    callback();
  });

  socket.on('leave', (user) => {
    socket.broadcast
      .to('user')
      .emit('message', { user, text: `${user.full_name} has left the chat!` });
  });

  socket.on('sendMessage', (message, user, callback) => {
    io.to('user').emit('message', { user, text: message });

    callback();
  });

  // socket.on('disconnect', () => {
  //   const user = removeUser(socket.id);
  //   if (user) {
  //     io.to('user').emit('message', {
  //       role: 'admin',
  //       user: 'Admin',
  //       text: `${user.full_name} has left the store.`,
  //     });
  //   }
  // });

  socket.on('joinStore', (user, camera, callback) => {
    const users = addUser(user, camera);
    socket.join('store');
    socket.emit('positionjoined', {
      users,
    });
    callback();
  });

  socket.on('getusers', () => {
    const users = getUser();
    socket.emit('emitusers', {
      users,
    });
  });

  socket.on('leaveStore', (user) => {
    const users = removeUser(user);
    io.to('store').emit('positionleave', { users });
  });

  socket.on('sendPosition', (user, camera, callback) => {
    const users = updateeUser(user, camera);
    io.to('store').emit('position', { users });
    callback();
  });
});

const corsOptions = {
  origin: process.env.REACT_APP_API_URL,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '4mb' })); // ability to upload data less than 4mb
app.use(cookieParser());

schedule.scheduleJob('*/5 * * * * *', async () => {
  const allDevices = await Device.find({});
  const { Authorization } = process.env;

  for (let i = 0; i < allDevices.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const device = await Device.findById(allDevices[i].id);

    const THINGSBOARD_API = `https://things.sofia-networks.com/api/plugins/telemetry/DEVICE/${
      device && device.deviceId && device.deviceId.id
    }/values/timeseries?useStrictDataTypes=false`;
    // eslint-disable-next-line no-await-in-loop
    await fetch(THINGSBOARD_API, {
      method: 'GET',
      headers: {
        'X-Authorization': Authorization,
        Accept: '*/*',
      },
    })
      .then((res) => res.json())
      .then((body) => {
        if (body.data_Temperature) {
          device.temperature.ts = body.data_Temperature[0].ts;
          device.temperature.value = body.data_Temperature[0].value;
        }

        if (body.data_Humidity) {
          device.humidity.ts = body.data_Humidity[0].ts;
          device.humidity.value = body.data_Humidity[0].value;
        }

        if (body.data_Pressure) {
          device.pressure.ts = body.data_Pressure[0].ts;
          device.pressure.value = body.data_Pressure[0].value;
        }

        if (body.data_Battery) {
          device.battery.ts = body.data_Battery[0].ts;
          device.battery.value = body.data_Battery[0].value;
        }

        device.save();
      });
  }
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_APP_API_URL);
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();

  return '';
});

app.use('/auth', authRoutes);
app.use('/socket', messRoutes);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    const authHeader = req.get('Authorization');

    if (!authHeader) {
      throw new AuthenticationError('Invalid, missing or expired token');
    }

    return { res, req };
  },
  introspection: true,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
});

server.applyMiddleware({ app, cors: corsOptions });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
