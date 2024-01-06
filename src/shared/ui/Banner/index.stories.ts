import type { Meta, StoryObj } from '@storybook/react';
import giftTop from '@/shared/assets/giftHeader.png';
import giftBottom from '@/shared/assets/gift.png';
import { Banner } from './index.tsx';
import { ThemeBanner } from './enums';

const meta: Meta<typeof Banner> = {
  title: 'Shared/Banner',
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Black: Story = {
  args: { image: giftTop, theme: ThemeBanner.TOP },
};

export const Transparent: Story = {
  args: { image: giftBottom, theme: ThemeBanner.BOTTOM },
};
