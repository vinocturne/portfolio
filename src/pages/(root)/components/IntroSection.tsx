export default function IntroSection() {
    return (
        <section id={'intro'} className={`absolute top-0 left-0 right-0 bottom-0 max-h-[600px] z-[-1] bg-no-repeat bg-cover bg-main`}>
            <section className={'absolute left-[50%] translate-x-[-50%] max-w-[1140px] mx-auto mt-[160px] font-han flex flex-col items-center gap-[20px]'}>
                <span className={'text-white text-7xl'}>신건희</span>
                <span className={'text-white text-5xl'}>웹 프론트엔드 개발자</span>
                <section className={'max-w-[1140px] mt-[20px] mx-auto font-noto flex flex-col items-center justify-center gap-[30px]'}>
                    <div className={'w-[50px] h-[5px] bg-orange-500'} />
                    <div className={'flex flex-col text-white items-center justify-center gap-[5px] text-xl'}>
                        <span>항상 새로 배우는 느낌으로 최선을 다하는 프론트엔드 개발자입니다.</span>
                        <span>낙천적이고 꼼꼼한 성격이 장점입니다.</span>
                    </div>
                </section>
                <section className={'mt-[30px]'}>
                    <button className={'px-10 py-5 bg-orange-400 rounded-3xl hover:bg-orange-300'}>더 알아보기</button>
                </section>
            </section>

        </section>
    )
}