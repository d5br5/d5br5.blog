import Link from 'next/link';

import { Post } from '@/lib/post';
import { CalendarDays, Clock3 } from 'lucide-react';

interface Props {
  post: Post;
}

export const PostHeader = ({ post }: Props) => {
  return (
    <header className='text-center mt-14'>
      <h1 className='mb-5'>{post.title}</h1>
      <div className='text-base mb-3'>
        <Link
          href={`/blog/${post.categoryPath}`}
          className='text-pink-600 no-underline hover:underline underline-offset-4 font-semibold'
        >
          {post.categoryPublicName}
        </Link>
      </div>
      <div className='flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
        <div className='flex items-center gap-1'>
          <CalendarDays className='w-3.5' />
          <span>{post.dateString}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Clock3 className='w-3.5' />
          <span>{post.readingMinutes}분</span>
        </div>
      </div>
      <hr className='mt-5' />
    </header>
  );
};
