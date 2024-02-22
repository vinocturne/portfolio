export default function CareerSection() {
  const companyData = [
    {
      id: 1,
      companyName: '정글스카이',
      companyLogo: 'jungle_sky_logo.png',
      period: '2021.05 ~ 2022.07',
      roll: '개발팀 프론트엔드 팀원',
      website: 'https://junglesky.asia/',
    },
    {
      id: 2,
      companyName: '엠포스',
      companyLogo: 'emforce_logo.png',
      period: '2022.07 ~ 2023.11',
      roll: 'IT커머스개발팀 프론트엔드 팀원',
      website: 'https://www.emforce.co.kr/',
    },
    {
      id: 3,
      companyName: 'CMI Partners',
      companyLogo: 'moomooz_logo.jpeg',
      period: '2023.11 ~ 2024.03',
      roll: '커뮤니티개발팀 프론트엔드 팀원',
      website: 'https://moomooz.career.greetinghr.com/',
    },
  ]
  return (
    <section id={'career'} className={'bg-[#364156] py-16'}>
      <article className={'mx-auto max-w-[1140px] flex flex-col items-center gap-[60px] '}>
        <span className={'font-han text-5xl text-white'}>Career</span>
        <div className={'w-[90%] max-w-[1100px] text-white flex justify-end'}>
          <div className={'border-l-white w-[50%] border-l-[2px] flex flex-col gap-[36px]'}>
            {companyData.map((company) => {
              return (
                <div
                  key={company.id}
                  className={
                    'ml-[24px] border-[2px] flex items-center gap-[24px] rounded-2xl px-[24px] py-[16px] hover:scale-[110%] hover:translate-x-[5%] cursor-pointer'
                  }
                  onClick={() => {
                    window.open(company.website)
                  }}
                >
                  <img src={company.companyLogo} className={'rounded-2xl bg-white p-[10px]'} width={85} />
                  <div className={'flex flex-col gap-[6px]'}>
                    <span className={'text-2xl font-bold'}>{company.companyName}</span>
                    <span className={'text-md'}>{company.period}</span>
                    <span className={'text-sm'}>{company.roll}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </article>
    </section>
  )
}
