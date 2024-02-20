import Lego from '../../../assets/svg/lego.svg'
import Calendar from '../../../assets/svg/calendar.svg'
import Pin from '../../../assets/svg/map-pin.svg'
import Mail from '../../../assets/svg/mail.svg'
import Phone from '../../../assets/svg/phone.svg'
import School from '../../../assets/svg/school.svg'
export default function AboutSection() {
  return (
    <section
      id={'about'}
      className={'font-noto mx-auto max-w-[1140px] flex flex-col items-center justify-center py-16 gap-[60px]'}
    >
      <span className={'font-han text-5xl'}>About Me</span>
      <div className={'w-[80%] mx-auto flex flex-wrap flex-auto justify-center items-center gap-[42px] sm:gap-[42px] '}>
        <div className={'grow shrink md:w-[30%] sm:w-[50%] w-[100%] flex justify-start gap-[14px]'}>
          <img src={Lego} alt={'face'} width={40} />
          <div className={'flex flex-col'}>
            <span className={'text-md font-bold'}>이름</span>
            <span className={'text-2xl font-bold'}>신건희</span>
          </div>
        </div>
        <div className={'grow shrink md:w-[30%] sm:w-[50%] w-[100%] flex justify-start gap-[14px]'}>
          <img src={Calendar} alt={'calendar'} width={40} />
          <div className={'flex flex-col'}>
            <span className={'text-md font-bold'}>생년월일</span>
            <span className={'text-2xl font-bold'}>93.06.17</span>
          </div>
        </div>
        <div className={'grow shrink md:w-[30%] sm:w-[50%] w-[100%] flex justify-start gap-[14px]'}>
          <img src={Pin} alt={'pin'} width={40} />
          <div className={'flex flex-col'}>
            <span className={'text-md font-bold'}>지역</span>
            <span className={'text-2xl font-bold'}>인천광역시 미추홀구</span>
          </div>
        </div>
        <div className={'grow shrink md:w-[30%] sm:w-[50%] w-[100%] flex justify-start gap-[14px]'}>
          <img src={Mail} alt={'mail'} width={40} />
          <div className={'flex flex-col'}>
            <span className={'text-md font-bold'}>이메일</span>
            <span className={'text-2xl font-bold'}>godgh617@gmail.com</span>
          </div>
        </div>
        <div className={'grow shrink md:w-[30%] sm:w-[50%] w-[100%] flex justify-start gap-[14px]'}>
          <img src={Phone} alt={'phone'} width={40} />
          <div className={'flex flex-col'}>
            <span className={'text-md font-bold'}>휴대전화</span>
            <span className={'text-2xl font-bold'}>010-9080-4957</span>
          </div>
        </div>
        <div className={'grow shrink md:w-[30%] sm:w-[50%] w-[100%] flex justify-start gap-[14px]'}>
          <img src={School} alt={'school'} width={40} />
          <div className={'flex flex-col'}>
            <span className={'text-md font-bold'}>최종학력</span>
            <span className={'text-2xl font-bold'}>인하대학교(국제통상학과)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
