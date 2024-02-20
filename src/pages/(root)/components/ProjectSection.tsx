import ProjectCard from './projectCard/ProjectCard.tsx'

export default function ProjectSection() {
  const data = [
    {
      id: 1,
      title: '망가킹 백오피스',
      period: '2021.07 ~ 2022.05',
      skill: ['Vue(2.0)', 'Javascript', 'SCSS', 'Bootstrap', 'Chart.js', 'i18n', 'Vuex', 'Gulp'],
      roll: 'Vue 기반 만화 어플리케이션 백오피스 개발 및 유지보수',
      content: [
        '작품 관리 및 운영에 필요한 편의를 제공하는 관리자 페이지 개발',
        'i18n을 이용한 복수 언어 적용 서비스',
        'Gulp.js를 활용해 구글 스프레드 시트와 연동 후 빌드 시 수정된 언어로 적용 가능하도록 자동화 추가',
        '다중 이미지 업로드 모듈화 적용',
      ],
      achievement: [
        '구버전의 관리자 페이지 리뉴얼. DTO를 활용해 데이터의 유효성 검사를 진행하고, 데이터의 오류를 줄일 수 있도록 적용할 수 있었습니다.',
        'Vuex를 통한 전역 상태 관리 및 토큰을 통한 로그인 세션 관리를 해볼 수 있었습니다.',
        '운영 성과에 있어서 중요한 내부 데이터를 가시적으로 표시할 수 있도록 차트 및 테이블화 적용을 할 수 있습니다.',
      ],
      link: null,
      image: ['project/mangaking/mangaking_0.webp', 'project/mangaking/mangaking_1.webp'],
    },
    {
      id: 2,
      title: '반품마켓 백오피스',
      period: '2022.07 ~ 2023.11',
      skill: [
        'React',
        'Typescript',
        'SCSS',
        'Bootstrap',
        'React Query',
        'React Hook Form',
        'Zustand',
        'AWS(Cloud Front, Code Pipeline, Code Commit)',
      ],
      roll: '관리자 및 파트너사 백오피스 페이지 개발 및 유지 보수, 쿠폰, 배너와 같은 이벤트 및 주문 현황 메인 개발',
      content: [
        'React Hook Form의 팀내 가이드 담당',
        '주문 현황 관련 React Table 개발',
        '서비스 내 파트너사 가입 관련 유효성 검증 및 인증 로직 리팩토링',
      ],
      achievement: [
        '유효성 검증 및 폼 관리에 사용되는 React Hook Form을 개발에 맞는 방향으로 활용할 수 있습니다.',
        '요청된 디자인에 맞게 스타일을 적용할 수 있습니다.',
        '서비스 도중 일어나는 이슈에 빠르게 대처할 수 있습니다.',
        '서비스 데이터를 사용자가 쉽게 확인하고 활용 가능하도록 개발할 수 있습니다.',
      ],
      link: [{ name: 'Web', url: 'https://www.banpoommarket.co.kr/partner' }],
      image: [
        'project/banpoom_partner/partner_0.PNG',
        'project/banpoom_partner/partner_1.PNG',
        'project/banpoom_partner/partner_2.PNG',
      ],
    },
    {
      id: 3,
      title: '반품마켓 서비스',
      period: '2022.12 ~ 2023.11',
      skill: [
        'Next.js',
        'Typescript',
        'SCSS',
        'Bootstrap',
        'React Query',
        'React Hook Form',
        'Zustand',
        'AWS(Cloud Front, Code Pipeline, Code Commit)',
      ],
      roll: 'Next.js 기반 하이브리드 웹앱 개발 및 유지보수',
      content: [
        'React Query 낙관적 업데이트를 통한 위시리스트 개발',
        'S3 Presigned Url을 활용한 데이터 업로드 추가',
        'Compound Pattern을 활용한 ui 재사용성 향상',
        '무한 스크롤을 통한 데이터 표시 및 상품 관련 컴포넌트 개발',
        '공통 컴포넌트 개발을 통한 반복되는 코드 정리 및 신규 기획 개발',
      ],
      achievement: [
        '처음으로 진행한 웹앱 개발로 520만개의 상품, 약 10만의 회원이 사용하는 서비스를 개발하였습니다.',
        '실제 서비스의 A부터 Z까지 개발에 참여하여 전체적인 개발 프로세스를 보는 법을 배울 수 있었습니다.',
        '웹앱을 개발하며 각 디바이스에 따른 오류에 대한 대처법과 호환 이슈에 대해 처리할 수 있습니다.',
      ],
      link: [
        { name: 'App', url: 'https://play.google.com/store/apps/details?id=kr.co.banpoommarket.app&hl=ko&gl=US' },
        { name: 'Web', url: 'https://www.banpoommarket.co.kr/shop' },
      ],
      image: [
        'project/banpoom/banpoom_0.webp',
        'project/banpoom/banpoom_1.webp',
        'project/banpoom/banpoom_2.webp',
        'project/banpoom/banpoom_3.webp',
        'project/banpoom/banpoom_4.webp',
        'project/banpoom/banpoom_5.webp',
        'project/banpoom/banpoom_6.webp',
      ],
    },
    {
      id: 4,
      title: '원더 커뮤니티',
      period: '2023.11 ~ 2024.02',
      skill: [
        'Next.js',
        'Typescript',
        'PandaCSS',
        'Ark UI',
        'React Query',
        'React Hook Form',
        'Zustand',
        'Framer Motion',
        'Next Auth',
      ],
      roll: '육아 정보 공유 플랫폼 원더 커뮤니티 개발 및 서비스',
      content: [
        'Next Auth를 활용한 카카오, 애플 로그인 메인 개발',
        '유저 회원가입 유효성 검증 및 메인 개발',
        '포인트샵 메인 개발',
        'Ark UI를 활용한 Headless UI 개발',
        'Framer Motion을 활용한 UI 애니메이션 적용',
        'React Query Infinity Scroll 적용 페이지 개발',
      ],
      achievement: [
        '웹 서비스에서 자주 사용되는 로그인 관련 라이브러리인 Next Auth를 사용할 수 있습니다.',
        'Headless UI에 대한 이해와 이를 활용한 개발이 가능합니다.',
        'Framer Motion을 활용해 UI에 인터렉션 애니메이션을 적용할 수 있습니다.',
        '요청사항에 맞는 디자인 및 UX를 생각한 개발이 가능합니다.',
      ],
      link: [{ name: 'App', url: 'https://play.google.com/store/apps/details?id=com.cmipartners.wonder' }],
      image: [
        'project/wonder/wonder_0.webp',
        'project/wonder/wonder_1.webp',
        'project/wonder/wonder_2.webp',
        'project/wonder/wonder_3.webp',
        'project/wonder/wonder_4.webp',
        'project/wonder/wonder_5.webp',
      ],
    },
  ]
  return (
    <section id={'project'} className={'font-noto bg-[#53B3CB] py-16'}>
      <article className={'mx-auto max-w-[1140px] flex flex-col items-center gap-[60px] '}>
        <span className={'font-han text-5xl text-white'}>Projects</span>
        {data.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </article>
    </section>
  )
}
