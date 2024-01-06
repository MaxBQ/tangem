import { Additional, Mode } from './types';

export function classNames(cls: string, mode: Mode = {}, additional: Additional = []): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mode)
      .filter(([, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}
