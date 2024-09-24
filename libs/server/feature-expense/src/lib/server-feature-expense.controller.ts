import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ServerFeatureExpenseService } from './server-feature-expense.service';
import { CreateExpenseDto, UpdateExpenseDto, UpsertExpenseDto } from './dtos/expense.dto';
import { IExpense } from '@hba/shared/domain';

@Controller({ path: 'expenses' })
export class ServerFeatureExpenseController {
  constructor(
    private serverFeatureExpenseService: ServerFeatureExpenseService
  ) { }

  @Get()
  getAll(): IExpense[] {
    return this.serverFeatureExpenseService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IExpense {
    return this.serverFeatureExpenseService.getOne(id);
  }

  @Post('')
  create(@Body() expense: CreateExpenseDto) {
    return this.serverFeatureExpenseService.create(expense);
  }

  @Put()
  upsertOne(@Body() data: UpsertExpenseDto): IExpense {
    return this.serverFeatureExpenseService.upsert(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateExpenseDto): IExpense {
    return this.serverFeatureExpenseService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): IExpense {
    return this.serverFeatureExpenseService.delete(id);
  }
}
