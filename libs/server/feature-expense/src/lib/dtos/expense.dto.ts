import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { IExpense } from "@hba/shared/domain";

export class CreateExpenseDto implements Omit<IExpense, 'id'> {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  amount!: number;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsString()
  @IsNotEmpty()
  account!: string;

  @IsBoolean()
  @IsNotEmpty()
  completed!: boolean;
}
