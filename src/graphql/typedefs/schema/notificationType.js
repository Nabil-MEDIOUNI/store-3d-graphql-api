const { gql } = require('apollo-server-express');

module.exports.NotificationType = gql`
  type Notification {
    id: ID
    title: String
    body: String
    type: String
    notified_by: Person
    notified_to: Notified_To
    seen_by: [Person]
    createdAt: String
    deleted_by: [Person]
  }

  type Notified_To {
    can_view: String
  }

  input Notified_To_Input {
    can_view: String
  }

  input NotificationInput {
    title: String
    body: String
    type: String
    notified_to: Notified_To_Input
    notified_by: String
  }
`;
