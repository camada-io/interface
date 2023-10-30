import { gql } from '@apollo/client'

export const typeDefs = gql`
  extend type Query {
    sort: [Sort]
  }

  type Sort {
    name: String
    order: String
  }
`
