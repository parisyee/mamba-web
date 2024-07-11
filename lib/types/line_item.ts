export default interface LineItem {
  id: string;
  description: string;
  rate: number;
  multiplier: number;
  quantity: number;
  unit: string;
  accountId: string;
}