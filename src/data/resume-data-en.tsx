import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const RESUME_DATA_EN = {
  name: 'Doh Kim',
  initials: 'DH',
  location: 'Seoul, South Korea, KST',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: 'Detail-oriented Front-end Developer',
  summary:
    'I believe that web development is the most powerful means to quickly bring ideas to life as services.\nWith a mindset of creating a work of art, I pay attention to detail and simplicity.\nI am diligently studying JavaScript, which is used across various platforms.',
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
      company: 'Adena Software',
      link: 'https://www.adenasoft.com/',
      title: 'Web Front-end Developer',
      start: '2023. 03.',
      end: null,
      description:
        'A B2B forex/payment fintech company operating a white-label cryptocurrency exchange',
      points: [
        'Development of cryptocurrency spot, futures exchanges, and admin pages.',
        'Implementation of dark mode and introduction of a design system. Renewal of the main page.',
        'Integration of third-party payment services using pop-ups.',
        'Search Engine Optimization (SEO)',
        'Improvement of trading chart usability and code structure.',
        'Visualization of statistical data using Chart.js.',
      ],
    },
    {
      company: 'Tmax Fintech',
      link: 'https://www.tmax.co.kr/tmaxfintech',
      title: 'Web Front-end Developer',
      start: '2022. 02.',
      end: '2023. 02.',
      description:
        'A Fintech B2B/C BaaS specialized company providing core banking and robo-advisors',
      points: [
        'Frontend development of asset allocation and trading simulator.',
        'Creation of a React-based Single Page Application (SPA) and state management using Redux.',
        'Code migration from Vue.js to React.js.',
        'Optimization of frontend rendering performance.',
        'Organization of git commit and branch rules.',
      ],
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

export type RESUME = typeof RESUME_DATA_EN;
