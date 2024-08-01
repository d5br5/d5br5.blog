import { Metadata } from 'next';

import LanguageSelector from '../_components/language-selector';
import { ProjectCard } from '@/components/common/project-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { RESUME_DATA_EN } from '@/data/resume-data-en';
import { getSortedProjectList } from '@/lib/project';
import { GlobeIcon, MailIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: `${RESUME_DATA_EN.name} | ${RESUME_DATA_EN.about}`,
  description: RESUME_DATA_EN.summary,
};

export default async function AboutPageEnglish() {
  const projectList = await getSortedProjectList('en');
  console.log(projectList);

  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-6 pt-12 sm:p-9 md:p-16 print:p-12'>
      <Section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4'>
        <div className='flex flex-col-reverse items-center justify-between gap-4 sm:flex-row'>
          <div className='flex-1 space-y-1.5 text-center sm:text-start'>
            <h1 className='mb-4 text-3xl font-bold'>{RESUME_DATA_EN.name}</h1>
            <p className='max-w-md text-pretty text-muted-foreground print:text-[12px]'>
              {RESUME_DATA_EN.about}
            </p>
            <p className='max-w-md items-center text-pretty text-sm text-muted-foreground'>
              <a
                className='inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline'
                href={RESUME_DATA_EN.locationLink}
                target='_blank'
              >
                <GlobeIcon className='size-3' />
                {RESUME_DATA_EN.location}
              </a>
            </p>
            <div className='flex justify-center gap-x-2 pt-1 text-sm text-muted-foreground sm:justify-start print:hidden'>
              {RESUME_DATA_EN.contact.social.map((social) => (
                <Button key={social.name} className='size-8' variant='outline' size='icon' asChild>
                  <a href={social.url} target='_blank'>
                    <social.icon className='size-4' />
                  </a>
                </Button>
              ))}
              {RESUME_DATA_EN.contact.email && (
                <Button className='size-8' variant='outline' size='icon' asChild>
                  <a href={`mailto:${RESUME_DATA_EN.contact.email}`}>
                    <MailIcon className='size-4' />
                  </a>
                </Button>
              )}
            </div>
            <div className='hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex print:text-[12px]'>
              {RESUME_DATA_EN.contact.email ? (
                <a href={`mailto:${RESUME_DATA_EN.contact.email}`}>
                  <span className='underline'>{RESUME_DATA_EN.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className='size-28'>
            <AvatarImage alt={RESUME_DATA_EN.name} src={RESUME_DATA_EN.avatarUrl} />
            <AvatarFallback>{RESUME_DATA_EN.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className='text-2xl font-bold'>About</h2>
          <p className='text-pretty leading-8 text-muted-foreground print:text-[12px]'>
            {RESUME_DATA_EN.summary}
          </p>
        </Section>
        <Section>
          <h2 className='text-2xl font-bold'>Work Experience</h2>
          <div className='space-y-4'>
            {RESUME_DATA_EN.work.map((work) => (
              <Card key={work.company}>
                <CardHeader className='mb-3'>
                  <div className='flex flex-col items-start justify-between gap-1 gap-x-2 text-base sm:flex-row sm:items-center'>
                    <h3 className='inline-flex items-center justify-center gap-x-1 text-lg font-semibold leading-none'>
                      <a className='hover:underline' href={work.link} target='_blank'>
                        {work.company}
                      </a>
                    </h3>
                    <div className='text-sm tabular-nums text-gray-500'>
                      {work.start} - {work.end ?? 'Present'}
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className='text-pretty text-sm'>
                  {work.description}
                </CardDescription>

                <h4 className='mt-7 font-semibold  leading-none print:text-[12px]'>{work.title}</h4>
                {work.points && (
                  <ul className='mt-4 list-disc space-y-2 text-sm'>
                    {work.points.map((point, index) => (
                      <li key={index} className='ml-5 text-muted-foreground'>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className='text-2xl font-bold'>Education</h2>
          <div className='space-y-3'>
            {RESUME_DATA_EN.education.map((education) => (
              <Card key={education.school}>
                <CardHeader>
                  <div className='flex flex-col items-start justify-between gap-1 gap-x-2 text-base sm:flex-row sm:items-center'>
                    <h3 className='text-lg font-semibold leading-none'>{education.school}</h3>
                    <div className='text-sm tabular-nums text-gray-500'>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='mt-2 text-base print:text-[12px]'>
                  {education.degree}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className='text-2xl font-bold'>Skills</h2>
          <div className='flex flex-wrap gap-1'>
            {RESUME_DATA_EN.skills.map((skill) => (
              <Badge className='print:text-[10px]' key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <Section className='print-force-new-page scroll-mb-16'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
            {projectList.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.desc}
                // tags={project.techStack}
                // link={'link' in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>
      </Section>
      <LanguageSelector />
    </main>
  );
}
