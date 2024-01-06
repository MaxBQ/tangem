import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index.tsx';
import { ThemeButton } from './enums';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Black: Story = {
  args: { children: 'Text', theme: ThemeButton.BLACK },
};

export const Transparent: Story = {
  args: { children: 'Text', theme: ThemeButton.TRANSPARENT },
};
