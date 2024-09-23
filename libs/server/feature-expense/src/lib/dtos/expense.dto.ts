import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IExpense } from "@hba/domain";

export class CreateExpenseDto implements Omit<IExpense, 'id'> {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
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
