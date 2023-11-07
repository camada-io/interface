import { gql } from "@apollo/client"

export const typeDefs = gql`
  extend type Query {
    sort: [Sort]
  }

  input EmailInput {
    name: String
    email: String
    message: String
  }

  type Sort {
    name: String
    order: String
  }
`
