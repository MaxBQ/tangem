import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './index.tsx';
import { SizeText, ThemeText } from './enums';

const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { text: 'Text', theme: ThemeText.DEFAULT },
};

export const Gold: Story = {
  args: { text: 'Text', theme: ThemeText.GOLD },
};

export const GoldGradient: Story = {
  args: { text: 'Text', theme: ThemeText.GOLD_GRADIENT },
};

export const BlackGradient: Story = {
  args: { text: 'Text', theme: ThemeText.BLACK_GRADIENT },
};

export const SizeM: Story = {
  args: { text: 'Text', size: SizeText.SIZE_M, theme: ThemeText.GOLD_GRADIENT },
};
export const SizeL: Story = {
  args: { text: 'Text', size: SizeText.SIZE_L, theme: ThemeText.GOLD_GRADIENT },
};
export const SizeXL: Story = {
  args: { text: 'Text', size: SizeText.SIZE_XL, theme: ThemeText.GOLD_GRADIENT },
};
