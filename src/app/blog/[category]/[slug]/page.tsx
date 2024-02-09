import { PostBody } from '@/components/post_detail/PostBody';
import { PostHeader } from '@/components/post_detail/PostHeader';
import ScrollProgressBar from '@/layouts/ScrollProgressBar';
import { getPostDetail, getPostPaths, parsePostAbstract } from '@/lib/post';

type Props = {
  params: { category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((item) => ({ category: item.categoryPath, slug: item.slug }));
  return paramList;
}

const PostDetail = async ({ params: { category, slug } }: Props) => {
  const post = await getPostDetail(category, slug);
  return (
    <>
      <ScrollProgressBar />
      <div className='max-w-[850px] px-4 w-full mx-auto prose dark:prose-invert'>
        <PostHeader post={post} />
        <PostBody>{post.content}</PostBody>
      </div>
    </>
  );
};

export default PostDetail;
