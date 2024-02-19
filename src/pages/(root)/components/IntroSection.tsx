export default function IntroSection() {
    return (
        <section id={'intro'} className={`absolute top-0 left-0 right-0 bottom-0 max-h-[600px] z-[-1] bg-no-repeat bg-cover bg-main`}>
            <section className={'absolute left-[50%] translate-x-[-50%] max-w-[1140px] mx-auto mt-[160px] font-han flex flex-col items-center gap-[20px]'}>
                <span className={'text-white text-7xl'}>신건희</span>
                <span className={'text-white text-5xl'}>웹 프론트엔드 개발자</span>
            </section>
        </section>
    )
}