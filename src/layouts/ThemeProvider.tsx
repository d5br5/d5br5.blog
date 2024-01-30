'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
