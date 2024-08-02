import { Suspense } from 'react';

import { MdxComponents } from '../mdx';
import { GitRepo } from '@/components/about/git-repo';
import { ServiceLink } from '@/components/about/service-link';
import { Project } from '@/config/types';
// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

interface Props {
  project: Project;
}

export const ProjectBody = ({ project }: Props) => {
  const { gitRepoUrl, link } = project;
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className='prose project px-5 dark:prose-invert'>
        {(link || gitRepoUrl) && (
          <div className='mt-1 flex flex-wrap justify-center gap-4'>
            {gitRepoUrl && <GitRepo url={gitRepoUrl} />}
            {link && <ServiceLink url={link} />}
          </div>
        )}
        <MDXRemote
          source={project.content}
          options={{
            mdxOptions: {
              remarkPlugins: [
                // 깃허브 Flavored 마크다운 지원 추가 (version downgrade)
                remarkGfm,
                // 이모티콘 접근성 향상
                remarkA11yEmoji,
                // mdx 1줄 개행 지원
                remarkBreaks,
              ],
              rehypePlugins: [
                // pretty code block
                [
                  // @ts-ignore
                  rehypePrettyCode,
                  {
                    theme: { dark: 'github-dark-dimmed', light: 'github-light' },
                  },
                ],
                // toc id를 추가하고 제목을 연결
                rehypeSlug,
              ],
            },
          }}
          components={MdxComponents}
        />
      </div>
    </Suspense>
  );
};
