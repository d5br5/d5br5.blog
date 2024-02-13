import Giscus from '@/components/post_detail/Giscus';
import { PostBody } from '@/components/post_detail/PostBody';
import { PostHeader } from '@/components/post_detail/PostHeader';
import TocSidebar from '@/components/post_detail/TableOfContentSidebar';
import TocTop from '@/components/post_detail/TableOfContentTop';
import ScrollProgressBar from '@/layouts/ScrollProgressBar';
import { getPostDetail, getPostPaths, parsePostAbstract, parseToc } from '@/lib/post';

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
  const toc = parseToc(post.content);
  return (
    <>
      <ScrollProgressBar />
      <div className='max-w-[750px] px-4 w-full mx-auto prose dark:prose-invert'>
        <PostHeader post={post} />
        <TocTop toc={toc} />
        <article className='relative'>
          <TocSidebar toc={toc} />
          <PostBody post={post} />
        </article>
        <hr />
        <Giscus />
      </div>
    </>
  );
};

export default PostDetail;
