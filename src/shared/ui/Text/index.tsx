import cls from './index.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';
import { memo } from 'react';
import { AlignText, SizeText, ThemeText, WeightText } from './enums';
import type { TextProps } from './types';

export const Text = memo((props: TextProps) => {
  const {
    theme = ThemeText.DEFAULT,
    className,
    text,
    size = SizeText.SIZE_M,
    align = AlignText.LEFT,
    weight,
  } = props;

  return (
    <p
      className={classNames(
        cls.text,
        {
          [cls.medium]: weight === WeightText.MEDIUM,
          [cls.semibold]: weight === WeightText.SEMIBOLD,
        },
        [cls[theme], cls[size], cls[align], className],
      )}
    >
      {text}
    </p>
  );
});
