import Link from 'next/link';

import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className='grid flex-1 place-content-center text-center'>
      <h1 className='mb-4 text-2xl font-bold'>Not Found</h1>
      <p className='mb-8 text-lg'>찾을 수 없는 페이지입니다.</p>
      <Button asChild className='mx-auto w-fit px-10'>
        <Link href='/blog'>홈으로</Link>
      </Button>
    </div>
  );
};

export default NotFound;
