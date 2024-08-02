import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/config/types';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { title, desc, startMonthString, endMonthString, tags, link } = project;
  const tagList = tags.split(',').map((item) => item.trim());

  return (
    <Card className='flex h-full flex-col overflow-hidden p-4 text-left'>
      <CardHeader className=''>
        <div>
          <CardTitle className='flex items-center gap-1.5 text-base'>
            {title}
            {link && <div className='size-1 rounded-full bg-green-500' />}
          </CardTitle>
          <CardDescription className='mt-1'>
            {startMonthString} - {endMonthString}
          </CardDescription>
          <CardDescription className='mb-1 mt-3'>{desc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='mt-auto flex'>
        <div className='mt-2 flex flex-wrap gap-1'>
          {tagList.map((tag) => (
            <Badge
              className='px-1.5 py-0.5 print:px-1 print:py-0.5 print:text-[8px] print:leading-tight'
              variant='secondary'
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
