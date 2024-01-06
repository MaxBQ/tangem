import type { Meta, StoryObj } from '@storybook/react';
import { BannerWatcher } from './BannerWatcher.tsx';

const meta: Meta<typeof BannerWatcher> = {
  title: 'Widgets/BannerWatcher',
  component: BannerWatcher,
};

export default meta;
type Story = StoryObj<typeof BannerWatcher>;

export const Primary: Story = {
  args: {},
};
