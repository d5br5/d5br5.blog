import { Metadata } from 'next';

import AboutPage from '../_components/about-layout';
import { RESUME_DATA_KO } from '@/data/resume-data-ko';

export const metadata: Metadata = {
  title: `${RESUME_DATA_KO.name} | ${RESUME_DATA_KO.about}`,
  description: RESUME_DATA_KO.summary,
};

export default function AboutPageEnglish() {
  return <AboutPage resumeData={RESUME_DATA_KO} />;
}
