import { Injectable, NotFoundException } from '@nestjs/common';
import { IExpense } from '@hba/shared/domain';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseEntitySchema } from '@hba/server/data-access-expense';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ServerFeatureExpenseService {
  constructor(
    @InjectRepository(ExpenseEntitySchema)
    private expenseRepository: Repository<IExpense>
  ) { }

  async getAll(): Promise<IExpense[]> {
    const expenses = await this.expenseRepository.find();
    if (!expenses) {
      throw new NotFoundException('No expenses found');
    }
    return expenses;
  }

  async getOne(id: string): Promise<IExpense> {
    const expense = await this.expenseRepository.findOneBy({ id });
    if (!expense) {
      throw new NotFoundException(`Expense with id ${id} not found`);
    }
    return expense;
  }

  async create(expense: Omit<IExpense, 'id'>): Promise<IExpense> {
    const newExpense = await this.expenseRepository.save(expense);
    return newExpense;
  }

  async update(id: string, data: Partial<IExpense>): Promise<IExpense> {
    const updatedExpense = await this.expenseRepository.save({ id, ...data });
    return updatedExpense;
  }

  async upsert(data: IExpense): Promise<IExpense> {
    const expense = await this.expenseRepository.save({ ...data });
    return expense;
  }

  async delete(id: string): Promise<DeleteResult> {
    const removedExpense = await this.expenseRepository.delete({ id });
    return removedExpense;
  }
}
