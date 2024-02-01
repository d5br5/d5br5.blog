import Link from 'next/link';

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
            <li key={post.url + post.date}>
              <Link href={post.url}>
                {post.title}({post.categoryPublicName}) 읽는데 {post.readingMinutes}분
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default PostListPage;
