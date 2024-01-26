import Link from 'next/link';

export const Header = () => {
  return (
    <header className='flex justify-center'>
      <div className='w-full max-w-[1200px] flex justify-between px-4'>
        <div>
          <Link href='/blog'>blog</Link>
        </div>
        <div>right</div>
      </div>
    </header>
  );
};
