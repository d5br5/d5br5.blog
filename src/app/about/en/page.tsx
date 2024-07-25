import { Metadata } from 'next';

import AboutPage from '../_components/about-layout';
import { RESUME_DATA_EN } from '@/data/resume-data-en';

export const metadata: Metadata = {
  title: `${RESUME_DATA_EN.name} | ${RESUME_DATA_EN.about}`,
  description: RESUME_DATA_EN.summary,
};

export default function AboutPageEnglish() {
  return <AboutPage resumeData={RESUME_DATA_EN} />;
}
