'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'next-themes';

export function Provider({ children }: PropsWithChildren) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}
