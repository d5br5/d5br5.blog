import { Fragment } from 'react';

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
            <ProjectCard project={project} />
          </D.DialogTrigger>
          <D.DialogContent className='gap-0 px-0 pb-1'>
            <D.DialogTitle className='text-center text-xl'>{project.title}</D.DialogTitle>
            <div className='mt-1 text-center text-sm text-gray-500'>
              {project.startMonthString} - {project.endMonthString}
            </div>
            <div className='mt-2 max-h-[80vh] overflow-y-scroll'>
              <ProjectBody project={project} />
            </div>
            <D.DialogDescription className='sr-only'></D.DialogDescription>
          </D.DialogContent>
        </D.Dialog>
      ))}
    </div>
  );
}
