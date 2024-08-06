import { Metadata } from 'next';

import LanguageSelector from '@/components/about/language-selector';
import ProjectList from '@/components/about/project-list';
import CopyLinkButton from '@/components/common/CopyLinkButton';
import { ProjectBody } from '@/components/project-detail/project-body';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import * as D from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Section } from '@/components/ui/section';
import { DATAS, Locale } from '@/config/types';
import { getCareerProjectList, getSortedProjectList } from '@/lib/project';
import { cn } from '@/lib/utils';
import { GlobeIcon, MailIcon } from 'lucide-react';

interface Props {
  params: {
    locale: Locale;
  };
}

export function generateStaticParams() {
  return Object.keys(DATAS).map((locale) => ({ locale }));
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const data = DATAS[locale].data;
  return {
    title: `${data.name} | ${data.about}`,
    description: data.summary,
  };
}

export default async function AboutPage({ params: { locale } }: Props) {
  const RESUME_DATA = DATAS[locale].data;
  const projectList = await getSortedProjectList(locale);
  const careerProjectList = await getCareerProjectList(locale);
  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-6 sm:p-9 md:p-16 print:p-12 print:pt-0'>
      <LanguageSelector className='m-auto mb-5 border-0 sm:hidden print:hidden' />
      <Section className='mx-auto w-full max-w-2xl space-y-8 print:space-y-4'>
        <div className='flex flex-col-reverse items-center justify-between gap-4 sm:flex-row'>
          <div className='flex-1 space-y-1.5 text-center sm:text-start'>
            <h1 className='mb-4 text-3xl font-bold'>{RESUME_DATA.name}</h1>
            <p className='max-w-md text-pretty text-muted-foreground print:text-[12px]'>
              {RESUME_DATA.about}
            </p>
            <p className='max-w-md items-center text-pretty text-sm text-muted-foreground'>
              <a
                className='inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline'
                href={RESUME_DATA.locationLink}
                target='_blank'
              >
                <GlobeIcon className='size-3' />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className='flex justify-center gap-x-2 pt-1 text-sm text-muted-foreground sm:justify-start print:hidden'>
              {RESUME_DATA.contact.social.map((social) => (
                <Button key={social.name} className='size-8' variant='outline' size='icon' asChild>
                  <a href={social.url} target='_blank'>
                    <social.icon className='size-4' />
                  </a>
                </Button>
              ))}
              {RESUME_DATA.contact.email && (
                <D.Dialog>
                  <D.DialogTrigger>
                    <Button className='size-8' variant='outline' size='icon' asChild>
                      <MailIcon className='size-4' />
                    </Button>
                  </D.DialogTrigger>
                  <D.DialogContent className='max-w-[300px]'>
                    <D.DialogHeader>
                      <D.DialogTitle className='p-0'>Email Address</D.DialogTitle>
                      <D.DialogDescription></D.DialogDescription>
                    </D.DialogHeader>
                    <div className='flex items-center space-x-2'>
                      <div className='grid flex-1 gap-2'>
                        <label htmlFor='link' className='sr-only'>
                          Link
                        </label>
                        <Input id='link' defaultValue={RESUME_DATA.contact.email} readOnly />
                      </div>
                      <CopyLinkButton
                        variant='default'
                        url={RESUME_DATA.contact.email}
                        className='p-3'
                      />
                    </div>
                  </D.DialogContent>
                </D.Dialog>
              )}
            </div>
            <div className='hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex print:text-[12px]'>
              {RESUME_DATA.contact.email && (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className='underline'>{RESUME_DATA.contact.email}</span>
                </a>
              )}
            </div>
          </div>

          <Avatar className='size-28'>
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className='text-2xl font-bold'>About</h2>
          <p
            className={cn(
              'text-pretty leading-8 text-muted-foreground print:text-[12px]',
              DATAS[locale].aboutClassName
            )}
          >
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className='text-2xl font-bold'>Work Experience</h2>
          <div className='space-y-4'>
            {RESUME_DATA.work.map((work) => (
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
                    {work.points.map((point, index) => {
                      if (typeof point === 'string') {
                        return (
                          <li key={index} className='ml-5 text-muted-foreground'>
                            {point}
                          </li>
                        );
                      } else {
                        const project = careerProjectList.find((p) => p.slug === point.slug);
                        if (!project)
                          return (
                            <li key={index} className='ml-5 text-muted-foreground'>
                              {point.title}
                            </li>
                          );
                        return (
                          <D.Dialog key={point.slug}>
                            <li className='ml-5 text-muted-foreground'>
                              <D.DialogTrigger className='underline underline-offset-4 hover:text-pink-600'>
                                {point.title}
                              </D.DialogTrigger>
                            </li>
                            <D.DialogContent className='gap-0 px-0 pb-3'>
                              <D.DialogTitle className='text-center text-xl'>
                                {point.title}
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
                        );
                      }
                    })}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className='text-2xl font-bold'>Education</h2>
          <div className='space-y-3'>
            {RESUME_DATA.education.map((education) => (
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
            {RESUME_DATA.skills.map((skill) => (
              <Badge className='print:text-[10px]' key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <Section className='print-force-new-page scroll-mb-16'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          <ProjectList list={projectList} />
        </Section>
      </Section>
    </main>
  );
}
