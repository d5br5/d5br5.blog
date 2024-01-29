import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/config/globals.css';
import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body className={cn(inter.className, 'min-h-screen flex flex-col')}>
        <Header />
        <main className='flex flex-1 flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
