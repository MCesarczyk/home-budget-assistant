import type { Meta, StoryObj } from '@storybook/angular';
import { ExpenseComponent } from './expense.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ExpenseComponent> = {
  component: ExpenseComponent,
  title: 'ExpenseComponent',
};
export default meta;
type Story = StoryObj<ExpenseComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/expense works!/gi)).toBeTruthy();
  },
};
