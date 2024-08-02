'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import * as D from '@/components/ui/dropdown-menu';
import { Dot, GlobeIcon } from 'lucide-react';

export default function LanguageSelector() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isKo = pathname.endsWith('/ko');
  const isEn = pathname.endsWith('/en');

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <D.DropdownMenu>
      <D.DropdownMenuTrigger asChild>
        <Button className='fixed bottom-7 right-7' variant='outline' size='icon'>
          <GlobeIcon className='size-5' />
        </Button>
      </D.DropdownMenuTrigger>
      <D.DropdownMenuContent align='end'>
        <D.DropdownMenuItem
          className='flex justify-between'
          disabled={isKo}
          onClick={() => {
            router.replace('/about/ko');
          }}
        >
          한국어 {isKo && <Dot />}
        </D.DropdownMenuItem>
        <D.DropdownMenuItem
          className='flex justify-between'
          disabled={isEn}
          onClick={() => {
            router.replace('/about/en');
          }}
        >
          English {isEn && <Dot />}
        </D.DropdownMenuItem>
      </D.DropdownMenuContent>
    </D.DropdownMenu>
  );
}
