import Link from 'next/link';

import { Post } from '@/lib/post';

interface PostListProps {
  postList: Post[];
}

const PostList = ({ postList }: PostListProps) => {
  console.log(postList);
  return (
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
  );
};

export default PostList;
