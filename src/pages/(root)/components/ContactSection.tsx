import { CopyToClipboard } from 'react-copy-to-clipboard'
export default function ContactSection() {
  return (
    <section id={'contact'} className={'bg-white py-16'}>
      <article className={'mx-auto max-w-[1140px] flex flex-col items-center gap-[60px] '}>
        <span className={'font-han text-5xl'}>Contact</span>
        <div className={'w-[90%] max-w-[1100px] flex flex-col items-center gap-[12px]'}>
          <span className={'text-3xl font-bold'}>Email</span>
          <CopyToClipboard text={'godgh617@gmail.com'} onCopy={() => alert('클립보드에 복사되었습니다~')}>
            <button
              className={
                'text-xl border-[1px] px-[24px] py-[12px] rounded-2xl flex gap-[12px] bg-gray-800 text-white items-center hover:bg-gray-600 active:scale-[90%] transition-all'
              }
            >
              <img src={'clipboard-text.svg'} />
              godgh617@gmail.com
            </button>
          </CopyToClipboard>
        </div>
        <div className={'w-[90%] max-w-[1100px] flex flex-col items-center gap-[12px]'}>
          <span className={'text-3xl font-bold'}>Resume</span>
          <a
            className={
              'text-xl border-[1px] px-[24px] py-[12px] rounded-2xl flex gap-[12px] bg-gray-800 text-white items-center hover:bg-gray-600 active:scale-[90%] transition-all'
            }
            href={'이력서.pdf'}
            download="신건희_프론트엔드_이력서.pdf"
          >
            <img src={'download.svg'} />
            이력서 다운로드
          </a>
        </div>
      </article>
    </section>
  )
}
