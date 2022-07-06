const Device = require('../../../models/device');
const DevicePosition = require('../../../models/devicePosition');

module.exports.DeviceQueries = {
  getDevice: async (_, { id }) => {
    const getDevice = await Device.findById(id).populate('position');
    getDevice.visits += 1;
    getDevice.save();

    return getDevice;
  },

  getDevicePositions: async () => DevicePosition.find({}),

  allDevices: () => Device.find({}).populate('position'),
};
