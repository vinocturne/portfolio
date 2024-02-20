export default function IntroSection() {
  return (
    <section
      id={'intro'}
      className={
        'relative top-0 h-[600px] before:h-[600px] before:box-border before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:max-h-[600px] before:z-[-1] before:bg-no-repeat before:bg-cover before:bg-main'
      }
    >
      <section
        className={
          'absolute left-[50%] translate-x-[-50%] max-w-[1140px] w-[100%] mx-auto mt-[130px] font-han flex flex-col items-center gap-[20px]'
        }
      >
        <span className={'text-white text-7xl'}>신건희</span>
        <span className={'text-white text-5xl'}>웹 프론트엔드 개발자</span>
        <section
          className={'max-w-[1140px] mt-[20px] mx-auto font-noto flex flex-col items-center justify-center gap-[30px]'}
        >
          <div className={'w-[50px] h-[5px] bg-orange-500'} />
          <div className={'flex flex-col text-white items-center justify-center gap-[5px] text-xl'}>
            <span>항상 새로 배우는 느낌으로</span>
            <span>최선을 다하는 프론트엔드 개발자입니다.</span>
            <span>낙천적이고 꼼꼼한 성격이 장점입니다.</span>
          </div>
        </section>
        <section className={'mt-[30px]'}>
          <button
            className={'px-10 py-5 bg-orange-400 rounded-3xl hover:bg-orange-300'}
            onClick={(event) => {
              event.preventDefault()
              document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            더 알아보기
          </button>
        </section>
      </section>
    </section>
  )
}
