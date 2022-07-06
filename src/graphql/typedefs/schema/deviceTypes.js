const { gql } = require('apollo-server-express');

module.exports.DeviceType = gql`
  type Device {
    id: ID
    deviceId: DeviceId
    name: String
    type: String
    label: String
    visits: Int
    position: DevicePosition
    deviceProfileId: DeviceProfile
    additionalInfo: AdditionalInfo
    temperature: Telemetry
    humidity: Telemetry
    pressure: Telemetry
    battery: Telemetry
  }

  type AdditionalInfo {
    description: String
  }

  type DevicePosition {
    id: String
    name: String
    values: PositionValues
  }

  type PositionValues {
    posX: Float
    posY: Float
    posZ: Float
  }

  type DeviceProfile {
    entityType: String
    id: String
  }

  type DeviceId {
    entityType: String
    id: String
    credentialsType: String
    credentialsId: String
  }

  type Telemetry {
    ts: String
    value: String
  }

  input DeviceInput {
    name: String
    type: String
    label: String
  }

  input PositionValuesInput {
    posX: Float
    posY: Float
    posZ: Float
  }

  input PositionInput {
    name: String
    values: PositionValuesInput
  }
`;
