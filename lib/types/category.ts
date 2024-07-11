export default interface Category {
  id: string;
  name: string;
  total: number;
  budgetId: string;
  accounts: Account[];
}