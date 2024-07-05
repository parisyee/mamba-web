import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    account: async (parent, args) => {
      return await prisma.account.findUnique({
        where: {
          id: parseInt(args.id),
        },
      })
    },
    accounts: async () => {
      return await prisma.account.findMany()
    },
    budget: async (parent, args) => {
      return await prisma.budget.findUnique({
        where: {
          id: parseInt(args.id),
        },
        include: {
          categories: true,
        },
      })
    },
    budgets: async () => {
      return await prisma.budget.findMany()
    },
    category: async (parent, args) => {
      return await prisma.category.findUnique({
        where: {
          id: parseInt(args.id),
        },
      })
    },
    categories: async () => {
      return await prisma.category.findMany()
    },
  },
  Mutation: {
    createAccount: async (parent, args) => {
      return await prisma.account.create({
        data: {
          name: args.name,
          categoryId: parseInt(args.categoryId),
        },
      })
    },
    createBudget: async (parent, args) => {
      return await prisma.budget.create({
        data: {
          name: args.name,
        },
      })
    },
    createCategory: async (parent, args) => {
      return await prisma.category.create({
        data: {
          name: args.name,
          total: args.total,
          budgetId: parseInt(args.budgetId),
        },
      })
    },
    createLineItem: async (parent, args) => {
      return await prisma.lineItem.create({
        data: {
          description: args.description,
          quantity: args.quantity,
          multiplier: args.multiplier,
          units: args.units,
          rate: args.rate,
          accountId: parseInt(args.accountId),
        },
      })
    },
    updateAccount: async (parent, args) => {
      return await prisma.account.update({
        where: {
          id: parseInt(args.id),
        },
        data: {
          name: args.name,
          categoryId: parseInt(args.categoryId),
        },
      })
    },
    updateBudget: async (parent, args) => {
      return await prisma.budget.update({
        where: {
          id: parseInt(args.id),
        },
        data: {
          name: args.name,
        },
      })
    },
    updateCategory: async (parent, args) => {
      return await prisma.category.update({
        where: {
          id: parseInt(args.id),
        },
        data: {
          name: args.name,
          total: args.total,
        },
      })
    },
    updateLineItem: async (parent, args) => {
      return await prisma.lineItem.update({
        where: {
          id: parseInt(args.id),
        },
        data: {
          description: args.description,
          quantity: args.quantity,
          multiplier: args.multiplier,
          units: args.units,
          rate: args.rate,
        },
      })
    },
  }
};
