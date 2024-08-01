import { ProjectCard } from '@/components/common/project-card';
import { ProjectBody } from '@/components/project-detail/project-body';
import * as D from '@/components/ui/dialog';
import { Project } from '@/config/types';

interface Props {
  list: Project[];
}

export default function ProjectList({ list }: Props) {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
      {list.map((project) => (
        <D.Dialog key={project.slug}>
          <D.DialogTrigger>
            <ProjectCard
              title={project.title}
              description={project.desc}
              // tags={project.techStack}
              // link={'link' in project ? project.link.href : undefined}
            />
          </D.DialogTrigger>
          <D.DialogContent>
            <ProjectBody project={project} />
          </D.DialogContent>
        </D.Dialog>
      ))}
    </div>
  );
}
