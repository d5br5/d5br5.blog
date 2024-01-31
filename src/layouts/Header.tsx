import Link from 'next/link';

import ThemeSwitch from '@/layouts/theme/Switch';

export const Header = () => {
  return (
    <nav className='flex justify-center h-[60px] items-center sticky top-0'>
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
