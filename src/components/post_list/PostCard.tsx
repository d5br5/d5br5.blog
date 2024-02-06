import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/lib/post';
import dayjs from 'dayjs';
import { CalendarDays, Clock3 } from 'lucide-react';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const date = dayjs(post.date).locale('ko').format('YYYY년 MM월 DD일');
  return (
    <Link href={post.url}>
      <li className='flex flex-col gap-3 h-full rounded-md overflow-hidden shadow-md hover:shadow-xl transition border dark:border-slate-700 dark:hover:border-white'>
        <div className='w-full aspect-video relative rounded-t-md'>
          <Image
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
            sizes='(max-width: 1000px) 50vw, 450px'
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='p-4 pt-1 flex flex-col justify-between flex-1'>
          <div>
            <div className='text-sm lg:text-base text-pink-600 font-medium'>
              {post.categoryPublicName}
            </div>
            <h2 className='text-lg sm:text-xl md:text-lg lg:text-xl font-bold mb-3 mt-1'>
              {post.title}
            </h2>
          </div>
          <div className='flex gap-3 text-sm text-gray-500 dark:text-gray-400 flex justify-between'>
            <div className='flex items-center gap-1'>
              <CalendarDays className='w-3.5' />
              <span>{date}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock3 className='w-3.5' />
              <span>{post.readingMinutes}분</span>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PostCard;
