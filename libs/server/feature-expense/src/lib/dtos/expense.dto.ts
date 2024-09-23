import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
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

export class UpsertExpenseDto implements IExpense {
  @IsString()
  @IsNotEmpty()
  id!: string;

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

export class UpdateExpenseDto implements Partial<Omit<IExpense, 'id'>> {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  amount?: number;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  account?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
