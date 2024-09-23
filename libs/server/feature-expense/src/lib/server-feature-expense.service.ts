import { Injectable, NotFoundException } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';
import { IExpense } from '@hba/shared/domain';

@Injectable()
export class ServerFeatureExpenseService {
  private expenses$$ = new BehaviorSubject<IExpense[]>([
    {
      id: '1',
      amount: 100,
      description: 'Lunch',
      category: 'Food',
      account: 'Cash',
      completed: false,
      name: 'Lunch',
    },
    {
      id: '2',
      amount: 200,
      description: 'Dinner',
      category: 'Food',
      account: 'Cash',
      completed: false,
      name: 'Dinner',
    }
  ]);

  getAll(): IExpense[] {
    return this.expenses$$.value;
  }

  getOne(id: string): IExpense {
    const expense = this.expenses$$.value.find((expense) => expense.id === id);
    if (!expense) {
      throw new NotFoundException(`Expense with id ${id} not found`);
    }
    return expense;
  }

  create(expense: Omit<IExpense, 'id'>): IExpense {
    const current = this.expenses$$.value;
    const newExpense = {
      ...expense,
      id: `expense-${Math.floor(Math.random() * 10000)}`,
    }
    this.expenses$$.next([...current, newExpense]);
    return newExpense;
  }
}
