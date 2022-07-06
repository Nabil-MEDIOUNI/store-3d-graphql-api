/* eslint-disable no-await-in-loop */
const fetch = require('node-fetch');
const { getArgumentInput } = require('../../../helpers/workWithObjects');

const Device = require('../../../models/device');
const DevicePosition = require('../../../models/devicePosition');

const { Authorization } = process.env;

module.exports.DeviceMutations = {
  refreshDevices: async () => {
    const allDevices = await Device.find({}).populate('position');
    const URL = 'https://things.sofia-networks.com/api/tenant/devices?pageSize=10&page=0';

    await fetch(URL, {
      method: 'GET',
      headers: {
        'X-Authorization': Authorization,
        Accept: '*/*',
      },
    })
      .then((res) => res.json())
      .then(async (body) => {
        if (body.data) {
          for (let i = 0; i < body.data.length; i++) {
            const devicesIDS = allDevices.map((device) => device.deviceId.id);
            if (!devicesIDS.includes(body.data[i].id.id)) {
              const newDevice = await Device.create({
                ...body.data[i],
                deviceId: {
                  ...body.data[i].id,
                },
              });
              const URL_1 = `https://things.sofia-networks.com/api/device/${newDevice.deviceId && newDevice.deviceId.id}/credentials`;
              await fetch(URL_1, {
                method: 'GET',
                headers: {
                  'X-Authorization': Authorization,
                  Accept: '*/*',
                },
              })
                .then((res) => res.json())
                .then((device) => {
                  newDevice.deviceId.credentialsId = device.credentialsId;
                  newDevice.save();
                });
            }
          }
        }
      });
  },

  refreshDevicesTemperature: async () => {
    const allDevices = await Device.find({}).populate('position');

    for (let i = 0; i < allDevices.length; i++) {
      const device = await Device.findById(allDevices[i].id);
      const {
        deviceId: { id },
      } = device;
      const URL_2 = `https://things.sofia-networks.com/api/plugins/telemetry/DEVICE/${id}/values/timeseries?useStrictDataTypes=false`;

      await fetch(URL_2, {
        method: 'GET',
        headers: {
          'X-Authorization': Authorization,
          Accept: '*/*',
        },
      })
        .then((res) => res.json())
        .then((body) => {
          device.temperature.ts = body.data_Temperature && body.data_Temperature[0].ts;
          device.temperature.value = body.data_Temperature && body.data_Temperature[0].value;

          device.humidity.ts = body.data_Humidity && body.data_Humidity[0].ts;
          device.humidity.value = body.data_Humidity && body.data_Humidity[0].value;

          device.pressure.ts = body.data_Pressure && body.data_Pressure[0].ts;
          device.pressure.value = body.data_Pressure && body.data_Pressure[0].value;

          device.battery.ts = body.data_Battery && body.data_Battery[0].ts;
          device.battery.value = body.data_Battery && body.data_Battery[0].value;

          device.save();
        });
    }

    return allDevices;
  },

  createDevicePosition: async (_, { position }) => {
    await DevicePosition.create({
      ...getArgumentInput(position),
    });
  },

  deleteDevicePosition: async (_, { id }) => {
    const device = await DevicePosition.findById(id);

    device.deleteOne();
    return device;
  },

  setDevicePosition: async (_, { id, position }) => {
    const device = await Device.findById(id).populate('position');
    const devicePosition = await DevicePosition.findById(position);

    device.position = devicePosition.id;
    device.save();

    return device;
  },

  deleteDevice: async (_, { id }) => {
    const device = await Device.findById(id).populate('position');

    device.deleteOne();
    return device;
  },

  deleteMultipleDevices: async (_, { ids }) => {
    for (let i = 0; i < ids.length; i++) {
      const device = await Device.findById(ids[i]);
      device.deleteOne();
    }
  },
};
