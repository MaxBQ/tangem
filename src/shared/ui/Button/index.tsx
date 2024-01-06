import { classNames } from '../../lib/classNames/classNames.ts';
import cls from './index.module.scss';
import { SizeButton, ThemeButton } from './enums';
import type { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.DEFAULT,
    size = SizeButton.SIZE_DEFAULT,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(cls.button, {}, [cls[theme], cls[size], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
