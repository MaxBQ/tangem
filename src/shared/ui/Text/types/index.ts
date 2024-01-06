import { AlignText, SizeText, ThemeText, WeightText } from '../enums';

export interface TextProps {
  text: string;
  className?: string;
  theme?: ThemeText;
  size?: SizeText;
  align?: AlignText;
  weight?: WeightText;
}
