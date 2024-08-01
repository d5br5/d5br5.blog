import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/config/types';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { title, desc, startMonthString, endMonthString } = project;
  return (
    <Card className='flex flex-col overflow-hidden p-4'>
      <CardHeader className=''>
        <div>
          <CardTitle className='text-base'>{title}</CardTitle>
          <CardDescription className='my-1'>
            {startMonthString} - {endMonthString}
          </CardDescription>
          <CardDescription>{desc}</CardDescription>
        </div>
      </CardHeader>
      {/* <CardContent className='mt-auto flex'>
        <div className='mt-2 flex flex-wrap gap-1'>
          {tags.map((tag) => (
            <Badge
              className='px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight'
              variant='secondary'
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent> */}
    </Card>
  );
}
