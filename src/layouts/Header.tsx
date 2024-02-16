'use client';

import Link from 'next/link';

import { useSpyElem } from '@/hook/useSpy';
import ThemeSwitch from '@/layouts/theme/Switch';

export const Header = () => {
  const { ref, marginTop } = useSpyElem(63);

  return (
    <nav
      style={{ marginTop }}
      ref={ref}
      className='fixed z-40 flex h-[64px] w-full items-center justify-center border-b bg-background shadow-sm'
    >
      <div className='flex w-full max-w-[1200px] justify-between px-4'>
        <div className='flex items-center'>
          <Link href='/blog'>D5BL5G</Link>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};
