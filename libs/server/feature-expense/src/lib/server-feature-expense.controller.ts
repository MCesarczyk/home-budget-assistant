import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ServerFeatureExpenseService } from './server-feature-expense.service';
import { CreateExpenseDto, ExpenseDto, UpdateExpenseDto, UpsertExpenseDto } from './dtos/expense.dto';
import { IExpense } from '@hba/shared/domain';
import { DeleteResult } from 'typeorm';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller({ path: 'expenses' })
export class ServerFeatureExpenseController {
  constructor(
    private serverFeatureExpenseService: ServerFeatureExpenseService
  ) { }

  @Get()
  @ApiOkResponse({ type: ExpenseDto, isArray: true })
  @ApiOperation({ summary: 'Get all expenses' })
  async getAll(): Promise<IExpense[]> {
    return await this.serverFeatureExpenseService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ExpenseDto })
  @ApiOperation({ summary: 'Get one expense' })
  async getOne(@Param('id') id: string): Promise<IExpense> {
    return await this.serverFeatureExpenseService.getOne(id);
  }

  @Post('')
  @ApiOkResponse({ type: ExpenseDto })
  @ApiOperation({ summary: 'Create an expense' })
  async create(@Body() expense: CreateExpenseDto): Promise<IExpense> {
    return await this.serverFeatureExpenseService.create(expense);
  }

  @Put()
  @ApiOkResponse({ type: ExpenseDto })
  @ApiOperation({ summary: 'Upsert an expense' })
  async upsertOne(@Body() data: UpsertExpenseDto): Promise<IExpense> {
    return await this.serverFeatureExpenseService.upsert(data);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ExpenseDto })
  @ApiOperation({ summary: 'Update an expense' })
  async update(@Param('id') id: string, @Body() data: UpdateExpenseDto): Promise<IExpense> {
    return await this.serverFeatureExpenseService.update(id, data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteResult })
  @ApiOperation({ summary: 'Delete an expense' })
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.serverFeatureExpenseService.delete(id);
  }
}
