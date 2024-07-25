import { Metadata } from 'next';

import { ProjectCard } from '@/components/common/project-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { RESUME_DATA } from '@/data/resume-data';
import { GlobeIcon, MailIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function AboutPage() {
  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12'>
      <section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 space-y-1.5'>
            <h1 className='text-2xl font-bold'>{RESUME_DATA.name}</h1>
            <p className='max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]'>
              {RESUME_DATA.about}
            </p>
            <p className='max-w-md items-center text-pretty font-mono text-xs text-muted-foreground'>
              <a
                className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
                href={RESUME_DATA.locationLink}
                target='_blank'
              >
                <GlobeIcon className='size-3' />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className='flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden'>
              {RESUME_DATA.contact.social.map((social) => (
                <Button key={social.name} className='size-8' variant='outline' size='icon' asChild>
                  <a href={social.url}>
                    <social.icon className='size-4' />
                  </a>
                </Button>
              ))}
              {RESUME_DATA.contact.email && (
                <Button className='size-8' variant='outline' size='icon' asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className='size-4' />
                  </a>
                </Button>
              )}
            </div>
            <div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]'>
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className='underline'>{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className='size-28'>
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className='text-xl font-bold'>About</h2>
          <p className='whitespace-pre-wrap text-pretty font-mono text-sm text-muted-foreground print:text-[12px]'>
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className='text-xl font-bold'>Work Experience</h2>
          <div className='-mx-3 space-y-3'>
            {RESUME_DATA.work.map((work) => (
              <Card key={work.company}>
                <CardHeader>
                  <div className='flex items-center justify-between gap-x-2 text-base'>
                    <h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
                      <a className='hover:underline' href={work.link}>
                        {work.company}
                      </a>
                    </h3>
                    <div className='text-sm tabular-nums text-gray-500'>
                      {work.start} - {work.end ?? 'Present'}
                    </div>
                  </div>

                  <h4 className='font-mono text-sm leading-none print:text-[12px]'>{work.title}</h4>
                </CardHeader>
                <CardContent className='mt-2 text-xs print:text-[10px]'>
                  {work.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className='text-xl font-bold'>Education</h2>
          <div className='-mx-3 space-y-3'>
            {RESUME_DATA.education.map((education) => (
              <Card key={education.school}>
                <CardHeader>
                  <div className='flex items-center justify-between gap-x-2 text-base'>
                    <h3 className='font-semibold leading-none'>{education.school}</h3>
                    <div className='text-sm tabular-nums text-gray-500'>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='mt-2 print:text-[12px]'>{education.degree}</CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className='text-xl font-bold'>Skills</h2>
          <div className='flex flex-wrap gap-1'>
            {RESUME_DATA.skills.map((skill) => (
              <Badge className='print:text-[10px]' key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <Section className='print-force-new-page scroll-mb-16'>
          <h2 className='text-xl font-bold'>Projects</h2>
          <div className='-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={'link' in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>
      </section>
    </main>
  );
}
