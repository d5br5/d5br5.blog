import { ProjectCard } from '@/components/common/project-card';
import { getSortedProjectList } from '@/lib/project';

interface Props {
  locale: string;
}

export default async function ProjectList({ locale }: Props) {
  const projectList = await getSortedProjectList(locale);
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
      {projectList.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          description={project.desc}
          // tags={project.techStack}
          // link={'link' in project ? project.link.href : undefined}
        />
      ))}
    </div>
  );
}
