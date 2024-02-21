'use client';

import Link from 'next/link';

import ScrollProgressBar from '@/components/common/ScrollProgressBar';
import { Button } from '@/components/ui/button';
import { useSpyElem } from '@/hook/useSpy';
import ThemeSwitch from '@/layouts/theme/Switch';
import { Github } from 'lucide-react';

export const Header = () => {
  const { ref, marginTop } = useSpyElem(65);

  return (
    <nav
      style={{ marginTop }}
      ref={ref}
      className='fixed z-40 flex w-full flex-col items-center justify-center border-b bg-background shadow-sm'
    >
      <div className='mt-1 flex h-[64px] w-full max-w-[1200px] items-center justify-between px-4'>
        <div className='flex items-center text-lg font-medium'>
          <Link href='/blog'>D5BL5G</Link>
        </div>
        <div className='flex gap-3'>
          <ThemeSwitch />
          <Button asChild variant='ghost' size='icon'>
            <Link href='https://github.com/d5br5' target='_blank'>
              <Github className='size-[1.2rem]' />
            </Link>
          </Button>
        </div>
      </div>
      <ScrollProgressBar />
    </nav>
  );
};
