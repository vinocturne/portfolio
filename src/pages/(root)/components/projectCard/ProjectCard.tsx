import Slider from 'react-slick'

interface ProjectData {
  id: number
  title: string
  period: string
  skill: string[]
  roll: string
  content: string[]
  achievement: string[]
  link: { name: string; url: string }[] | null
  image: string[]
}
export default function ProjectCard({ data }: { data: ProjectData }) {
  const sliderOption = {
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    className: 'w-[70%] max-w-[400px]',
  }
  return (
    <div
      className={
        'bg-white rounded-md w-[100%] max-w-[1100px] px-[24px] py-[36px] flex flex-col items-center sm:max-h-[2000px] shadow-2xl'
      }
    >
      <span className={'text-4xl font-han'}>{data.title}</span>
      <span className={'text-lg font-noto'}>{data.period}</span>
      <div className={'w-[100%] flex mt-[24px]'}>
        <div className={'w-[50%] flex justify-center items-center '}>
          <Slider {...sliderOption}>
            {data.image.map((url, index) => (
              <img src={url} key={`${data.title}_${index}`} alt={`${data.title}_${index}`} />
            ))}
          </Slider>
        </div>
        <div className={'w-[50%] flex flex-col gap-[16px]'}>
          <p className={'text-lg font-bold'}>{data.roll}</p>
          <div className={'w-[50%] h-[3px] bg-orange-500'} />
          <div className={'flex gap-[6px] items-center'}>
            <div className={'flex flex-wrap gap-[6px] items-center'}>
              {data.skill.map((stack, index) => {
                return (
                  <div key={index} className={'text-sm border-[1px] rounded-xl px-[6px] py-[4px]'}>
                    {stack}
                  </div>
                )
              })}
            </div>
          </div>
          <div className={'w-[50%] h-[3px] bg-orange-500'} />
          <div className={'text-md flex flex-col gap-[12px]'}>
            <span className={'text-lg font-bold'}>개발 내용</span>
            <div className={'flex flex-col gap-[6px]'}>
              {data.content.map((el, index) => (
                <div
                  key={index}
                  className={'text-md before:content-["·"] pl-[10px] before:ml-[-10px] before:mr-[6px]  break-words'}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className={'text-md flex flex-col gap-[12px]'}>
            <span className={'text-lg font-bold'}>성과</span>
            <div className={'flex flex-col gap-[6px]'}>
              {data.achievement.map((el, index) => (
                <div
                  key={`achievement_${index}`}
                  className={
                    'text-md before:content-["✔️"] before:scale-[70%] pl-[22px] before:ml-[-27px] before:mr-[6px] break-words'
                  }
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className={'w-[50%] h-[3px] bg-orange-500'} />
          <div className={'flex flex-col gap-[12px]'}>
            <span className={'text-lg font-bold'}>링크</span>
            <div className={'flex gap-[6px]'}>
              {data.link?.map((el) => {
                return (
                  <>
                    {el.name === 'App' && (
                      <>
                        <img
                          src={'google_play.svg'}
                          alt={'google_play'}
                          width={30}
                          onClick={() => window.open(el.url)}
                          className={'cursor-pointer hover:scale-150 transition-all'}
                        />
                      </>
                    )}
                    {el.name === 'Web' && (
                      <>
                        <img
                          src={'www.svg'}
                          alt={'web'}
                          width={30}
                          onClick={() => window.open(el.url)}
                          className={'cursor-pointer hover:scale-150 transition-all'}
                        />
                      </>
                    )}
                  </>
                )
              })}
              {!data.link && <>해당 링크가 존재하지 않습니다. 🤦</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
