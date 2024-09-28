import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseEntitySchema } from './schemas/expense.entity-schema';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseEntitySchema])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
