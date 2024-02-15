import Link from 'next/link';

import ThemeSwitch from '@/layouts/theme/Switch';

export const Header = () => {
  return (
    <nav className='sticky top-1 z-40 mt-1 flex h-[64px] items-center justify-center border-b bg-background pb-1 shadow-sm'>
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
