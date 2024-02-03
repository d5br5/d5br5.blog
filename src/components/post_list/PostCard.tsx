import Link from 'next/link';

import { Post } from '@/lib/post';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <Link href={post.url}>
      <li className='border'>
        {post.title}({post.categoryPublicName}) 읽는데 {post.readingMinutes}분
      </li>
    </Link>
  );
};

export default PostCard;
