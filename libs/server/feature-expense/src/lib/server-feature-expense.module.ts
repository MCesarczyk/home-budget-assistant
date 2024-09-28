import { Module } from '@nestjs/common';
import { ServerFeatureExpenseController } from './server-feature-expense.controller';
import { ServerFeatureExpenseService } from './server-feature-expense.service';
import { ServerDataAccessExpenseModule } from '@hba/server/data-access-expense';

@Module({
  imports: [ServerDataAccessExpenseModule],
  controllers: [ServerFeatureExpenseController],
  providers: [ServerFeatureExpenseService],
  exports: [ServerFeatureExpenseService],
})
export class ServerFeatureExpenseModule {}
