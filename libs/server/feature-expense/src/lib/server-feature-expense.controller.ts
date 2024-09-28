import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ServerFeatureExpenseService } from './server-feature-expense.service';
import { CreateExpenseDto, UpdateExpenseDto, UpsertExpenseDto } from './dtos/expense.dto';
import { IExpense } from '@hba/shared/domain';
import { DeleteResult } from 'typeorm';

@Controller({ path: 'expenses' })
export class ServerFeatureExpenseController {
  constructor(
    private serverFeatureExpenseService: ServerFeatureExpenseService
  ) { }

  @Get()
  async getAll(): Promise<IExpense[]> {
    return await this.serverFeatureExpenseService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<IExpense> {
    return await this.serverFeatureExpenseService.getOne(id);
  }

  @Post('')
  async create(@Body() expense: CreateExpenseDto): Promise<IExpense> {
    return await this.serverFeatureExpenseService.create(expense);
  }

  @Put()
  async upsertOne(@Body() data: UpsertExpenseDto): Promise<IExpense> {
    return await this.serverFeatureExpenseService.upsert(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateExpenseDto): Promise<IExpense> {
    return await this.serverFeatureExpenseService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.serverFeatureExpenseService.delete(id);
  }
}
