import { getPostDetail, getPostParamList } from '@/lib/post';
// import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

type Props = {
  params: { category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const paramList = getPostParamList();
  return paramList;
}

const PostDetail = async ({ params }: Props) => {
  const { category, slug } = params;
  const post = await getPostDetail(category, slug);
  console.log(post);

  return (
    <div className='w-[1000px] mx-auto'>
      <header>
        <h1>{post.title}</h1>
        <div>{post.date.toISOString()}</div>
      </header>
      <div>
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [
                // 깃허브 Flavored 마크다운 지원 추가
                remarkGfm,
                // // 이모티콘 접근성 향상
                // remarkA11yEmoji,
                // 제목을 기반으로 목차를 생성합니다.
                remarkToc,
              ],
              // 함께 작동하여 ID를 추가하고 제목을 연결합니다.
              rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
            },
          }}
          // components={mdxComponents}
        />
      </div>
    </div>
  );
};

export default PostDetail;
