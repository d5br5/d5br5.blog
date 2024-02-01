import PostList from '@/layouts/PostList';
import { getCategoryList, getPostList } from '@/lib/post';

type Props = {
  params: { category: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export function generateStaticParams() {
  const paramList = getCategoryList();
  return paramList;
}

const CategoryPage = async ({ params }: Props) => {
  const { category } = params;
  const postList = await getPostList(category);
  return <PostList postList={postList} />;
};

export default CategoryPage;
