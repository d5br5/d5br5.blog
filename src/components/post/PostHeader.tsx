import { Post } from '@/lib/post';

interface Props {
  post: Post;
}

export const PostHeader = ({ post }: Props) => {
  return (
    <header>
      <h1>{post.title}</h1>
      <div>{post.date.toISOString()}</div>
    </header>
  );
};
