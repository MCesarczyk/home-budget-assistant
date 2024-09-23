import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerFeatureExpenseModule } from '@hba/server/feature-expense';

@Module({
  imports: [ServerFeatureExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
