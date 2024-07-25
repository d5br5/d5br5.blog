import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { RESUME } from '@/data/resume-data-en';
import { GlobeIcon, MailIcon } from 'lucide-react';

interface Props {
  resumeData: RESUME;
}

export default function AboutPage({ resumeData }: Props) {
  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-6 sm:p-9 md:p-16 print:p-12'>
      <section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 space-y-1.5'>
            <h1 className='text-3xl font-bold'>{resumeData.name}</h1>
            <p className='max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]'>
              {resumeData.about}
            </p>
            <p className='max-w-md items-center text-pretty font-mono text-xs text-muted-foreground'>
              <a
                className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
                href={resumeData.locationLink}
                target='_blank'
              >
                <GlobeIcon className='size-3' />
                {resumeData.location}
              </a>
            </p>
            <div className='flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden'>
              {resumeData.contact.social.map((social) => (
                <Button key={social.name} className='size-8' variant='outline' size='icon' asChild>
                  <a href={social.url} target='_blank'>
                    <social.icon className='size-4' />
                  </a>
                </Button>
              ))}
              {resumeData.contact.email && (
                <Button className='size-8' variant='outline' size='icon' asChild>
                  <a href={`mailto:${resumeData.contact.email}`}>
                    <MailIcon className='size-4' />
                  </a>
                </Button>
              )}
            </div>
            <div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]'>
              {resumeData.contact.email ? (
                <a href={`mailto:${resumeData.contact.email}`}>
                  <span className='underline'>{resumeData.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className='size-28'>
            <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
            <AvatarFallback>{resumeData.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className='text-2xl font-bold'>About</h2>
          <p className='whitespace-pre-wrap text-pretty font-mono text-sm text-muted-foreground print:text-[12px]'>
            {resumeData.summary}
          </p>
        </Section>
        <Section>
          <h2 className='text-2xl font-bold'>Work Experience</h2>
          <div className='space-y-4'>
            {resumeData.work.map((work) => (
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
            {resumeData.education.map((education) => (
              <Card key={education.school}>
                <CardHeader>
                  <div className='flex items-center justify-between gap-x-2 text-base'>
                    <h3 className='text-lg font-semibold leading-none'>{education.school}</h3>
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
          <h2 className='text-2xl font-bold'>Skills</h2>
          <div className='flex flex-wrap gap-1'>
            {resumeData.skills.map((skill) => (
              <Badge className='print:text-[10px]' key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        {/* <Section className='print-force-new-page scroll-mb-16'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
            {resumeData.projects.map((project) => (
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
