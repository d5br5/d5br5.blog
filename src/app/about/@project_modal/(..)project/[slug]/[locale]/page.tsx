import Modal from './modal';
import { ProjectBody } from '@/components/project-detail/project-body';
import { getProjectDetail, getProjectPaths, parseProjectAbstract } from '@/lib/project';

type Props = {
  params: { slug: string; locale: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export function generateStaticParams() {
  const projectPaths: string[] = getProjectPaths();
  const paramList = projectPaths
    .map((path) => parseProjectAbstract(path))
    .map(({ slug, locale }) => ({ slug, locale }));
  return paramList;
}

const ProjectModal = async ({ params: { slug, locale } }: Props) => {
  const project = await getProjectDetail(slug, locale);

  return (
    <Modal>
      <div className='prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6'>
        <article className='relative'>
          <ProjectBody project={project} />
        </article>
      </div>
    </Modal>
  );
};

export default ProjectModal;
