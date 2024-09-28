import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { ICreateExpense, IExpense, IUpdateExpense, IUpsertExpense } from "@hba/shared/domain";

export class ExpenseDto implements IExpense {
  @ApiProperty({
    description: 'ID of the expense',
    example: '123e4567-e12b-12d1-a456-426614174000',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({
    description: 'Name of the expense',
    example: 'Groceries',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    description: 'Description of the expense',
    example: 'Bought groceries for the week',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    description: 'Amount of the expense',
    example: 100,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  amount!: number;

  @ApiProperty({
    description: 'Category of the expense',
    example: 'Groceries',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  category!: string;

  @ApiProperty({
    description: 'Account used for the expense',
    example: 'Bank',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  account!: string;

  @ApiProperty({
    description: 'Whether the expense is completed',
    example: false,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  completed!: boolean;
}

export class CreateExpenseDto implements ICreateExpense {
  @ApiProperty({
    description: 'Name of the expense',
    example: 'Groceries',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    description: 'Description of the expense',
    example: 'Bought groceries for the week',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    description: 'Amount of the expense',
    example: 100,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  amount!: number;

  @ApiProperty({
    description: 'Category of the expense',
    example: 'Groceries',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  category!: string;

  @ApiProperty({
    description: 'Account used for the expense',
    example: 'Bank',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  account!: string;

  @ApiProperty({
    description: 'Whether the expense is completed',
    example: false,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  completed!: boolean;
}

export class UpsertExpenseDto implements IUpsertExpense {
  @ApiProperty({
    description: 'ID of the expense',
    example: '123e4567-e12b-12d1-a456-426614174000',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({
    description: 'Name of the expense',
    example: 'Groceries',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    description: 'Description of the expense',
    example: 'Bought groceries for the week',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    description: 'Amount of the expense',
    example: 100,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  amount!: number;

  @ApiProperty({
    description: 'Category of the expense',
    example: 'Groceries',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  category!: string;

  @ApiProperty({
    description: 'Account used for the expense',
    example: 'Bank',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  account!: string;

  @ApiProperty({
    description: 'Whether the expense is completed',
    example: false,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  completed!: boolean;
}

export class UpdateExpenseDto implements IUpdateExpense {
  @ApiProperty({
    description: 'Name of the expense',
    example: 'Groceries',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Description of the expense',
    example: 'Bought groceries for the week',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Amount of the expense',
    example: 100,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @IsPositive()
  amount?: number;

  @ApiProperty({
    description: 'Category of the expense',
    example: 'Groceries',
    required: false,
  })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({
    description: 'Account used for the expense',
    example: 'Bank',
    required: false,
  })
  @IsString()
  @IsOptional()
  account?: string;

  @ApiProperty({
    description: 'Whether the expense is completed',
    example: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
