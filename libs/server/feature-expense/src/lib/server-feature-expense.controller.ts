import { Controller, Get, Param } from '@nestjs/common';
import { ServerFeatureExpenseService } from './server-feature-expense.service';

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
}
