export interface IExpense {
  id: string;
  name: string;
  description: string;
  amount: number;
  category: string;
  account: string;
  completed: boolean;
}
