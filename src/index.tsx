import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Thing({ children }: Props) {
  return (
    <div className="mt-10 bg-yellow-100 p-5 rounded-md">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  );
}

export * from './ToggleSwitch';
