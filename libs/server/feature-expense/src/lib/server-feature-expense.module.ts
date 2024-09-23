import { Module } from '@nestjs/common';
import { ServerFeatureExpenseController } from './server-feature-expense.controller';
import { ServerFeatureExpenseService } from './server-feature-expense.service';

@Module({
  controllers: [ServerFeatureExpenseController],
  providers: [ServerFeatureExpenseService],
  exports: [ServerFeatureExpenseService],
})
export class ServerFeatureExpenseModule {}
