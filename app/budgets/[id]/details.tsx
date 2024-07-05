export default function BudgetDetails({ budget }) {
  return (
    <div>
      <h1>Budget Details</h1>
      {budget.total}
    </div>
  );
}