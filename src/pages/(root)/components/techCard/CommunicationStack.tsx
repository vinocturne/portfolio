import Slack from '../../../../assets/svg/slack.svg';
import Jira from '../../../../assets/svg/jira.svg';
import Axure from '../../../../assets/svg/axure.svg';
import Figma from '../../../../assets/svg/figma.svg';

export default function CommunicationStack() {
  return (
    <div
      className={
        'h-fit bg-white px-12 py-8 rounded-md shadow-2xl hover:scale-110 transition-all'
      }
    >
      <span className={'font-noto font-extrabold text-2xl'}>Communication</span>
      <div className={'h-[5px] bg-orange-500'} />
      <div className={'flex flex-wrap max-w-[240px] gap-[6px] justify-center'}>
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Slack} width={40} className={'py-[10px]'} />
          <span className={'text-[12px] font-bold'}>Slack</span>
        </div>
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Jira} width={60} />
          <span className={'text-[12px] font-bold'}>Jira</span>
        </div>
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Axure} width={60} />
          <span className={'text-[12px] font-bold'}>Axsure</span>
        </div>
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Figma} width={60} />
          <span className={'text-[12px] font-bold'}>Figma</span>
        </div>
      </div>
    </div>
  );
}
