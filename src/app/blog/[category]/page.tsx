import PostListPage from '@/layouts/PostListPage';
import { getCategoryParamList } from '@/lib/post';

type Props = {
  params: { category: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export function generateStaticParams() {
  const paramList = getCategoryParamList();
  return paramList;
}

const CategoryPage = async ({ params }: Props) => {
  return <PostListPage category={params.category} />;
};

export default CategoryPage;
