import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { ICreateExpense, IUpdateExpense, IUpsertExpense } from "@hba/shared/domain";

export class CreateExpenseDto implements ICreateExpense {
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

export class UpsertExpenseDto implements IUpsertExpense {
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

export class UpdateExpenseDto implements IUpdateExpense {
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
