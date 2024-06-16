import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Budget {
    id: ID!
    name: String!
    total: Int!
    accounts: [Account!]!
  }

  type Account {
    id: ID!
    name: String!
    total: Int!
    lineItems: [LineItem!]!
  }

  type LineItem {
    id: ID!
    name: String!
    quantity: Int!
    multiplier: Int!
    units: String!
    cost: Int!
    position: Int!
  }

  type Query {
    account(id: ID!): Account
    accounts: [Account!]!
    budget(id: ID!): Budget
    budgets: [Budget!]!
  }
`;