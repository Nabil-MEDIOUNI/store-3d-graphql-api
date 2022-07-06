const { gql } = require('apollo-server-express');

module.exports.PersonType = gql`
  type PhotoType {
    url: String
    public_id: String
  }

  type Person {
    id: ID
    first_name: String
    last_name: String
    full_name: String
    visits: Int
    cover_photo: PhotoType
    email: String
    address: String
    city: String
    country: String
    postal_code: Int
    is_admin: Boolean
    is_verified: Boolean
    is_deleted: Boolean
  }

  input PersonInput {
    first_name: String
    last_name: String
    full_name: String
    address: String
    city: String
    country: String
    postal_code: Int
    email: String
    is_admin: Boolean
    is_verified: Boolean
  }
`;
