import Link from 'next/link';

import { Post } from '@/lib/post';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <li key={post.url + post.date}>
      <Link href={post.url}>
        {post.title}({post.categoryPublicName}) 읽는데 {post.readingMinutes}분
      </Link>
    </li>
  );
};

export default PostCard;
