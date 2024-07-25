import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const RESUME_DATA = {
  name: '김도형, Doh Kim',
  initials: 'DH',
  location: 'Seoul, South Korea, KST',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: 'Detail-oriented Front-end Developer',
  summary:
    '아이디어를 빠르게 서비스하기 위한 가장 강력한 수단은 웹 개발이라고 생각합니다.\n예술 작품을 만들어낸다는 마음가짐으로 디테일과 깔끔함에 주의를 기울입니다.\n다양한 플랫폼에서 활용되는 Javascript에 관심을 갖고 열심히 공부하고 있습니다.',
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
      title: 'Web Front-end Developer',
      start: '2023. 03.',
      end: null,
      description: '가상화폐 거래소 White Label을 운영하는 B2B 외환/페이먼트 핀테크 기업',
      points: [
        '가상화폐 현물, 선물 거래소 및 관리자 페이지 개발',
        '다크모드 적용 및 디자인 시스템 도입. 메인페이지 리뉴얼.',
        '팝업을 활용한 서드파티 결제 서비스 연동',
        '검색엔진 최적화(SEO) 작업 ',
        '거래 차트 사용성 및 코드 구조 개선',
        '통계 데이터 시각화 (Chart.js)',
      ],
    },
    {
      company: '티맥스 핀테크 Tmax Fintech',
      link: 'https://www.tmax.co.kr/tmaxfintech',
      title: 'Web Front-end Developer',
      start: '2022. 02.',
      end: '2023. 02.',
      description: '코어 뱅킹, 로보 어드바이저 등의 서비스를 제공하는 Fintech B2B/C BaaS 전문 기업',
      points: [
        '자산배분, 트레이딩 시뮬레이터 프론트엔드 개발',
        'React 기반 SPA 제작, Redux를 통한 상태관리',
        'Code Migration (Vue.js → React.js)',
        '프론트엔드 렌더링 성능 최적화',
        'git commit, branch rule 정리',
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
