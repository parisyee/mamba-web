import Account from "./account";


const BUDGET_QUERY = `
  query getBudget($id: ID!) {
    budget(id: $id) {
      id
      name
      total
      accounts {
        id
        name
        total
        lineItems {
          id
          name
          quantity
          multiplier
          units
          cost
          position
        }
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
  const budget = json.data.budget;
  console.log("BUDGET: ", budget)

  return (
    <div>
      <h1 className="text-4xl py-4">{`BUDGET ${budget.name}`}</h1>
      {budget.accounts.map((account) => {
        return (
          <Account key={account.id} account={account} />
        );
      })}
    </div>
  );
};