import type { Meta, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { randProduct, randBoolean, randNumber, randProductCategory, randAccount } from '@ngneat/falso';

import { ExpenseComponent } from './expense.component';

const randExpense = () => {
  const { id, title, description } = randProduct();
  return { id, name: title, description, amount: randNumber(), category: randProductCategory(), account: randAccount(), completed: randBoolean() };
}

const meta: Meta<ExpenseComponent> = {
  component: ExpenseComponent,
  title: 'ExpenseComponent',
  argTypes: {
    toggleComplete: { action: 'toggleComplete' },
    editExpense: { action: 'editExpense' },
    deleteExpense: { action: 'deleteExpense' },
  },
};
export default meta;
type Story = StoryObj<ExpenseComponent>;

export const Uncompleted: Story = {
  argTypes: {
    expense: { table: { disable: true } },
  },
  args: {
    expense: { ...randExpense(), completed: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/description!/gi)).toBeTruthy();
  },
};

export const Completed: Story = {
  argTypes: {
    expense: { table: { disable: true } },
  },
  args: {
    expense: { ...randExpense(), completed: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/description!/gi)).toBeTruthy();
  },
};

