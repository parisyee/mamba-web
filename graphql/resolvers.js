const accounts = [
  {
    id: 1,
    name: "ATL",
    total: 100000,
    lineItems: [
      {
        id: 1,
        name: "Writer fee",
        quantity: 1,
        multiplier: 1,
        units: "allow",
        cost: 10000000,
        position: 1
      },
      {
        id: 2,
        name: "Director fee",
        quantity: 1,
        multiplier: 1,
        units: "allow",
        cost: 50000000,
        position: 2
      },
      {
        id: 3,
        name: "Producer fee",
        quantity: 1,
        multiplier: 1,
        units: "allow",
        cost: 100000000,
        position: 3
      }
    ]
  }
]

const budgets = [
  {
    id: 1,
    name: "Budget 1",
    total: 100000,
    accounts: accounts
  }
];

export const resolvers = {
  Query: {
    account: (parent, args) => {
      return accounts.find(account => account.id === parseInt(args.id));
    },
    accounts: () => accounts,
    budget: (parent, args) => {
      return budgets.find(budget => budget.id === parseInt(args.id));
    }
  }
};
