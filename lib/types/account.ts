export default interface Account {
  id: string;
  name: string;
  total: number;
  categoryId: string;
  lineItems: LineItem[];
}