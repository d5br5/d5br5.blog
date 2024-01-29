import Link from 'next/link';

import { getPostList } from '@/lib/post';

const Blog = async () => {
  const postList = await getPostList();
  console.log(postList);

  return (
    <section className='w-[1000px] mx-auto'>
      <ul>
        {postList.map((post) => (
          <li key={post.url + post.date}>
            <Link href={post.url}>
              {post.title}({post.category})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
