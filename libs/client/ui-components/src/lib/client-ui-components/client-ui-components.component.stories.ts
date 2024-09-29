import type { Meta, StoryObj } from '@storybook/angular';
import { ClientUiComponentsComponent } from './client-ui-components.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ClientUiComponentsComponent> = {
  component: ClientUiComponentsComponent,
  title: 'ClientUiComponentsComponent',
};
export default meta;
type Story = StoryObj<ClientUiComponentsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/client-ui-components works!/gi)).toBeTruthy();
  },
};
