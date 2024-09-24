export interface IExpense {
  id: string;
  name: string;
  description: string;
  amount: number;
  category: string;
  account: string;
  completed: boolean;
}

export type ICreateExpense = Pick<IExpense, 'name' | 'description' | 'amount' | 'category' | 'account'>;

export type IUpdateExpense = Partial<Omit<ICreateExpense, 'id'>>;

export type IUpsertExpense = IExpense;
