'use client';

import Account from "./account";

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
export default function BudgetPage(
  { params }: {
    params: { id: string }
  }) {
  return (
    <div>
      <h1 className="text-4xl py-4">{`BUDGET ${params.id}`}</h1>
      {accounts.map((account) => {
        return (
          <Account key={account.id} account={account} />
        );
      })}
    </div>
  );
};