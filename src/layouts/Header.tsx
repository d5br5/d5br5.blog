import Link from 'next/link';

import ThemeSwitch from './ThemeChanger';

export const Header = () => {
  return (
    <nav className='flex justify-center h-[60px] items-center'>
      <div className='w-full max-w-[1200px] flex justify-between px-4'>
        <div>
          <Link href='/blog'>D5BL5G</Link>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};
