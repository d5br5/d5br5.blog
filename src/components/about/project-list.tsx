import { ProjectCard } from '@/components/about/project-card';
import { ProjectBody } from '@/components/project-detail/project-body';
import * as D from '@/components/ui/dialog';
import { Project } from '@/config/types';

interface Props {
  list: Project[];
}

export default function ProjectList({ list }: Props) {
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 print:grid-cols-3 print:gap-2'>
      {list.map((project) => (
        <D.Dialog key={project.slug}>
          <D.DialogTrigger>
            <ProjectCard project={project} />
          </D.DialogTrigger>
          <D.DialogContent className='gap-0 px-0 pb-3'>
            <D.DialogTitle className='text-center text-xl'>
              <div className='relative m-auto w-fit'>
                {project.title}
                {project.link && (
                  <div className='absolute -right-3 top-3 size-1 rounded-full bg-green-500' />
                )}
              </div>
            </D.DialogTitle>
            <div className='mt-1 text-center text-sm text-gray-500'>
              {project.startMonthString} - {project.endMonthString}
            </div>
            <div className='mt-2 max-h-[60vh] overflow-y-scroll sm:max-h-[70vh]'>
              <ProjectBody project={project} />
            </div>
            <D.DialogDescription className='sr-only'></D.DialogDescription>
          </D.DialogContent>
        </D.Dialog>
      ))}
    </div>
  );
}
