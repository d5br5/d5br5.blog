import PostList from '@/layouts/PostList';
import { getPostList } from '@/lib/post';

const Blog = async () => {
  const postList = await getPostList();
  return <PostList postList={postList} />;
};

export default Blog;
