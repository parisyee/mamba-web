'use client'

import BudgetDetails from "./details";
import BudgetCategories from "./categories";
import Category from "./category";

const BUDGET_QUERY = `
  query getBudget($id: ID!) {
    budget(id: $id) {
      id
      name
      total
      categories {
        id
        name
        total
      }
    }
  }
`;

export default async function BudgetPage({ params }: { id: string }) {
  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: BUDGET_QUERY, variables: {id: params.id } }),
  });
  const json = await res.json();
  const errors = json.errors;
  const budget = json.data.budget;

  if (errors) {
    return (
      <div>
        <h1>Error</h1>
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </div>
    )
  } else if (!budget) {
    return <div>Not found</div>;
  } else {
    return (
      <div>
        <h1 className="text-4xl py-4">{budget.name}</h1>
        <BudgetDetails budget={budget} />
        <BudgetCategories budget={budget} />
      </div>
    )
  }
};