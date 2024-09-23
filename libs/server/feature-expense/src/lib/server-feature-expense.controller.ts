import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ServerFeatureExpenseService } from './server-feature-expense.service';
import { CreateExpenseDto } from './dtos/expense.dto';

@Controller('server-feature-expense')
export class ServerFeatureExpenseController {
  constructor(
    private serverFeatureExpenseService: ServerFeatureExpenseService
  ) {}

  @Get()
  getAll() {
    return this.serverFeatureExpenseService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.serverFeatureExpenseService.getOne(id);
  }

  @Post('')
  create(@Body() expense: CreateExpenseDto) {
    return this.serverFeatureExpenseService.create(expense);
  }
}
