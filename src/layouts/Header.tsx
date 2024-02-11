import Link from 'next/link';

import ThemeSwitch from '@/layouts/theme/Switch';

export const Header = () => {
  return (
    <nav className='flex justify-center h-[64px] items-center sticky z-40 top-0 pt-1'>
      <div className='w-full max-w-[1200px] flex justify-between px-4'>
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
