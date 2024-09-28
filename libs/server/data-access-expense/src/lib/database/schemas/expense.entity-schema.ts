import { EntitySchema } from 'typeorm';

import { IExpense } from '@hba/shared/domain';

export const ExpenseEntitySchema = new EntitySchema<IExpense>({
  name: 'expense',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
      nullable: false,
    },
    description: {
      type: String,
      nullable: false,
    },
    amount: {
      type: Number,
      nullable: false,
    },
    category: {
      type: String,
      nullable: false,
    },
    account: {
      type: String,
      nullable: false,
    },
    completed: {
      type: Boolean,
      nullable: false,
      default: false,
    },
  },
});
