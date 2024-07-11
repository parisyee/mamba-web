import { destroyCategory } from '@/lib/api_clients/categories_client';
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
    categoryAccounts: async (parent, args) => {
      return await prisma.account.findMany({
        where: {
          categoryId: parseInt(args.categoryId),
        },
        include: {
          lineItems: true,
        },
      })
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
    budgetCategories: async (parent, args) => {
      return await prisma.category.findMany({
        where: {
          budgetId: parseInt(args.budgetId),
        },
        include: {
          accounts: true,
        },
      })
    }
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
    destroyAccount: async (parent, args) => {
      return await prisma.account.delete({
        where: {
          id: parseInt(args.id),
        },
      })
    },
    destroyBudget: async (parent, args) => {
      return await prisma.budget.delete({
        where: {
          id: parseInt(args.id),
        },
      })
    },
    destroyCategory: async (parent, args) => {
      return await prisma.category.delete({
        where: {
          id: parseInt(args.id),
        },
      })
    },
    destroyLineItem: async (parent, args) => {
      return await prisma.lineItem.delete({
        where: {
          id: parseInt(args.id),
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
