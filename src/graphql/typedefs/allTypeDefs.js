const { gql } = require('apollo-server-express');

module.exports.allTypeDefs = gql`
  type Query {
    # related to currentPerson
    currentPerson: Person
    # related to people
    getPerson(id: ID!): Person
    allPeople: [Person]
    # related to notifications
    allNotifications: [Notification]
    neverSeenNotifications: [Notification]
    getNotification(id: ID!): Notification
    # related to devices
    allDevices: [Device]
    getDevicePositions: [DevicePosition]
    getDevice(id: ID!): Device
    connectedUsers:[Connected]
  }

  type Mutation {
    # related to currentPerson
    currentPersonUpdate(person: PersonInput): Person
    changePassword(email: String!, password: String!, id: String!): Person
    currentPersonUpdatePassword(
      oldPassword: String!
      newPassword: String!
    ): Person
    changeCoverPhoto(file: Upload): Person
    visitStore: Person
    # related to people
    updatePerson(id: ID!, person: PersonInput): Person
    deletePerson(id: ID!): Person
    deleteMultiplePeople(ids: [ID]): [Person]
    # related to notifications
    sendNotification(notification: NotificationInput): Notification
    seeNotification(id: ID!): Notification
    deleteNotification(id: ID!): Notification
    deleteMultipleNotifications(ids: [ID]): [Notification]
    # related to devices
    refreshDevices: [Device]
    refreshDevicesTemperature: [Device]
    setDevicePosition(id: ID!, position: ID!): Device
    deleteDevicePosition(id: ID!): Device
    createDevicePosition(position: PositionInput): Device
    deleteDevice(id: ID!): Device
    deleteMultipleDevices(ids: [ID]): [Device]
    connecteduserUpdate(user:Connectedinput): [Connected]
    deconnecteduser(user:Connectedinput): [Connected]

  }
`;
