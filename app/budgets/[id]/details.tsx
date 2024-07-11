import formatCurrency from '@/lib/helpers/format_currency';

export default function BudgetDetails({ budget }) {

  return (
      <div className="flex justify-between">
        <h1 className="text-4xl py-4">{budget.name}</h1>
        <p className="text-lg">{formatCurrency(budget.total)}</p>
      </div>
  );
}