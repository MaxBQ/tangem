import { ButtonHTMLAttributes, ReactNode } from 'react';
import { SizeButton, ThemeButton } from '../enums';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
  size?: SizeButton;
}
