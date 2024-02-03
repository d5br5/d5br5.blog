import Link from 'next/link';

import PostCard from './PostCard';
import { getCategoryList, getCategoryPublicName, getPostList } from '@/lib/post';

interface PostListProps {
  category?: string;
}

const PostListPage = async ({ category }: PostListProps) => {
  const postList = await getPostList(category);
  const categoryList = getCategoryList().map((dirName) => ({
    dirName,
    publicName: getCategoryPublicName(dirName),
  }));

  return (
    <>
      <section className='w-[1000px] mx-auto mb-10'>
        <ul className='flex gap-3'>
          <li>
            <Link href='/blog' className={!category ? 'text-red-500' : ''}>
              All
            </Link>
          </li>
          {categoryList.map((cg) => (
            <li key={cg.dirName}>
              <Link
                href={`/blog/${cg.dirName}`}
                className={cg.dirName === category ? 'text-red-500' : ''}
              >
                {cg.publicName}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className='w-[1000px] mx-auto'>
        <ul>
          {postList.map((post) => (
            <PostCard key={post.url + post.date} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default PostListPage;
