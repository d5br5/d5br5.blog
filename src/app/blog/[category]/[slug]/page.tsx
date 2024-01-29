import { getPostParamList } from '@/lib/post';

type Props = {
  params: { category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const paramList = getPostParamList();
  return paramList;
}

const PostDetail = ({ params }: Props) => {
  const { category, slug } = params;

  return (
    <div>
      <div>post detail</div>
      <div>category : {category}</div>
      <div>slug : {slug}</div>
    </div>
  );
};

export default PostDetail;
