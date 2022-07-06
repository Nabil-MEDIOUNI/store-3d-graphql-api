const { gql } = require('apollo-server-express');

module.exports.ConnectedType = gql`
  type Connected {
    id: ID
    connected: [ConnectedUser]
  }
  type ConnectedUser {
    user: Person
    values: PositionValues
  }
  input Connectedinput {
    id:String
    values:PositionValuesInput
  }
`;
