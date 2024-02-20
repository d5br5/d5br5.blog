import { Metadata } from 'next';

import FloatingButton from '@/components/common/FloatingButton';
import Giscus from '@/components/post_detail/Giscus';
import { PostBody } from '@/components/post_detail/PostBody';
import { PostHeader } from '@/components/post_detail/PostHeader';
import TocSidebar from '@/components/post_detail/TableOfContentSidebar';
import TocTop from '@/components/post_detail/TableOfContentTop';
import { getPostDetail, getPostPaths, parsePostAbstract, parseToc } from '@/lib/post';

type Props = {
  params: { category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

const baseDomain = 'https://www.d5br5.dev';

export async function generateMetadata({ params: { category, slug } }: Props): Promise<Metadata> {
  const post = await getPostDetail(category, slug);

  const title = `${post.title} | D5BL5G`;
  const imageURL = `${baseDomain}${post.thumbnail}`;

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      url: `${baseDomain}${post.url}`,
      siteName: "Doh's Tech Blog",
      type: 'website',
      images: [imageURL],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.desc,
      images: [imageURL],
    },
  };
}

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
    <div className='prose mx-auto w-full max-w-[750px] px-4 dark:prose-invert'>
      <PostHeader post={post} />
      <TocTop toc={toc} />
      <article className='relative'>
        <TocSidebar toc={toc} />
        <PostBody post={post} />
      </article>
      <hr />
      <Giscus />
      <FloatingButton />
    </div>
  );
};

export default PostDetail;
