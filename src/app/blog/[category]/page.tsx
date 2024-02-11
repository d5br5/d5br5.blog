import PostListPage from '@/components/post_list/PostListPage';
import { getCategoryList } from '@/lib/post';

type Props = {
  params: { category: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map((category) => ({ category }));
  return paramList;
}

const CategoryPage = async ({ params }: Props) => {
  return <PostListPage category={params.category} />;
};

export default CategoryPage;
