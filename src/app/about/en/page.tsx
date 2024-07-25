import { Metadata } from 'next';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { RESUME_DATA_EN } from '@/data/resume-data-en';
import { GlobeIcon, MailIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: `${RESUME_DATA_EN.name} | ${RESUME_DATA_EN.about}`,
  description: RESUME_DATA_EN.summary,
};

export default function AboutPageKorean() {
  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-6 sm:p-9 md:p-16 print:p-12'>
      <section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 space-y-1.5'>
            <h1 className='text-3xl font-bold'>{RESUME_DATA_EN.name}</h1>
            <p className='max-w-md text-pretty  text-sm text-muted-foreground print:text-[12px]'>
              {RESUME_DATA_EN.about}
            </p>
            <p className='max-w-md items-center text-pretty  text-xs text-muted-foreground'>
              <a
                className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
                href={RESUME_DATA_EN.locationLink}
                target='_blank'
              >
                <GlobeIcon className='size-3' />
                {RESUME_DATA_EN.location}
              </a>
            </p>
            <div className='flex gap-x-1 pt-1  text-sm text-muted-foreground print:hidden'>
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
            <div className='hidden flex-col gap-x-1  text-sm text-muted-foreground print:flex print:text-[12px]'>
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
          <p className='text-pretty  text-sm text-muted-foreground print:text-[12px]'>
            {RESUME_DATA_EN.summary}
          </p>
        </Section>
        <Section>
          <h2 className='text-2xl font-bold'>Work Experience</h2>
          <div className='space-y-4'>
            {RESUME_DATA_EN.work.map((work) => (
              <Card key={work.company}>
                <CardHeader className='mb-3'>
                  <div className='flex items-center justify-between gap-x-2 text-base'>
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
                <CardDescription className='text-sm'>{work.description}</CardDescription>

                <h4 className='mt-5 font-semibold  leading-none print:text-[12px]'>{work.title}</h4>
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
                  <div className='flex items-center justify-between gap-x-2 text-base'>
                    <h3 className='text-lg font-semibold leading-none'>{education.school}</h3>
                    <div className='text-sm tabular-nums text-gray-500'>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='mt-2 text-sm print:text-[12px]'>
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

        {/* <Section className='print-force-new-page scroll-mb-16'>
      <h2 className='text-2xl font-bold'>Projects</h2>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
        {RESUME_DATA_EN.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.techStack}
            link={'link' in project ? project.link.href : undefined}
          />
        ))}
      </div>
    </Section> */}
      </section>
    </main>
  );
}
