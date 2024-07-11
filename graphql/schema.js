import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Budget {
    id: ID!
    name: String!
    total: Int!
    categories: [Category]
  }

  type Category {
    id: ID!
    name: String!
    total: Int!
    budgetId: ID!
    accounts: [Account]
  }

  type Account {
    id: ID!
    name: String!
    total: Int!
    categoryId: ID!
    lineItems: [LineItem]
  }

  type LineItem {
    id: ID!
    description: String!
    quantity: Int!
    multiplier: Int!
    units: String!
    rate: Int!
    accountId: ID!
  }

  type Query {
    account(id: ID!): Account
    categoryAccounts(categoryId: ID!): [Account!]!
    budget(id: ID!): Budget
    budgets: [Budget!]!
    category(id: ID!): Category
    budgetCategories(budgetId: ID!): [Category!]!
  }

  type Mutation {
    createAccount(name: String!, categoryId: ID!): Account!
    createBudget(name: String!): Budget!
    createCategory(name: String!, total: Int!, budgetId: ID!): Category!
    createLineItem(description: String, quantity: Int, multiplier: Int, units: String, rate: Int, accountId: ID!): LineItem!
    destroyAccount(id: ID!): Account!
    destroyBudget(id: ID!): Budget!
    destroyCategory(id: ID!): Category!
    destroyLineItem(id: ID!): LineItem!
    updateAccount(id: ID!, name: String, categoryId: ID): Account!
    updateBudget(id: ID!, name: String): Budget!
    updateCategory(id: ID!, name: String, total: Int): Category!
    updateLineItem(id: ID!, description: String, quantity: Int, multiplier: Int, units: String, rate: Int, accountId: ID): LineItem!
  }
`;