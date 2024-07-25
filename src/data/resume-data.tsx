import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const RESUME_DATA = {
  name: '김도형, Doh Kim',
  initials: 'DH',
  location: 'Seoul, South Korea, KST',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: 'Detail-oriented Front-end Developer',
  summary:
    '아이디어를 빠르게 서비스하기 위한 가장 강력한 수단은 웹 개발이라고 생각합니다.\n예술 작품을 만들어낸다는 마음가짐으로 디테일에 주의를 기울입니다.\n다양한 플랫폼에서 활용되는 Javascript에 관심을 갖고 열심히 공부하고 있습니다.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/40906871?v=4',
  personalWebsiteUrl: 'https://jarocki.me',
  contact: {
    email: 'ehgud456456@naver.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/BartoszJarocki',
        icon: IconGithub,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bjarocki/',
        icon: IconLinkedin,
      },
    ],
  },
  education: [
    {
      school: 'Seoul National University',
      degree: "Bachelor's Degree in Mechanical Engineering and Business Administration",
      start: '2015',
      end: '2022',
    },
  ],
  work: [
    {
      company: '아데나 소프트웨어 Adena Software',
      link: 'https://www.adenasoft.com/',
      title: 'Front-end Developer',
      start: '2023. 03.',
      end: null,
      description: '',
    },
    {
      company: '티맥스 핀테크 Tmax Fintech',
      link: 'https://www.tmax.co.kr/tmaxfintech',
      title: 'Front-end Developer',
      start: '2022. 02.',
      end: '2023. 02.',
      description: '',
    },
  ],
  skills: ['Javascript', 'Typescript', 'React.js', 'Vue.js', 'Next.js'],
  projects: [
    {
      title: 'Parabol',
      techStack: ['Full Stack Developer', 'TypeScript', 'React', 'Node.js', 'GraphQL'],
      description: 'The Agile meeting co-pilot that delivers better meetings with less effort',
      link: {
        label: 'github.com',
        href: 'https://parabol.co/',
      },
    },
    {
      title: 'Canal Digital GO',
      techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
      description: 'Video streaming mobile application for Canal Digital subscribers',
    },
  ],
} as const;
