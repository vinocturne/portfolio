import FrontStack from './techCard/FrontStack.tsx';
import DevelopmentStack from './techCard/DevelopmentStack.tsx';
import VersionControlStack from './techCard/VersionControlStack.tsx';
import CommunicationStack from './techCard/CommunicationStack.tsx';

export default function TechStackSection() {
  return (
    <section id={'stack'} className={'font-noto bg-[#F9C22E] py-16'}>
      <article
        className={
          'mx-auto max-w-[1140px] flex flex-col items-center gap-[60px]'
        }
      >
        <span className={'font-han text-5xl'}>Tech Stack</span>
        <div
          className={
            'flex flex-col lg:max-h-[870px] md:max-h-[1300px] sm:max-h-[2000px] flex-wrap gap-[24px]'
          }
        >
          <FrontStack />
          <DevelopmentStack />
          <VersionControlStack />
          <CommunicationStack />
        </div>
        <div className={'mt-[28px]'}>
          <span className={'text-3xl font-han'}>
            ...앞으로 더욱 추가될 예정!
          </span>
        </div>
      </article>
    </section>
  );
}
