import { ProjectCard } from '@/components/common/project-card';
import { Project } from '@/config/types';

interface Props {
  list: Project[];
}

export default async function ProjectList({ list }: Props) {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
      {list.map((project) => (
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
