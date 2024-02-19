import Aws from '../../../../assets/svg/aws.svg';
import Vercel from '../../../../assets/svg/vercel.svg';

export default function DevelopmentStack() {
  return (
    <div
      className={
        'h-fit bg-white px-12 py-8 rounded-md shadow-2xl hover:scale-110 transition-all'
      }
    >
      <span className={'font-noto font-extrabold text-2xl'}>Development</span>
      <div className={'h-[5px] bg-orange-500'} />
      <div className={'flex flex-wrap max-w-[240px] gap-[6px] justify-center'}>
        <img src={Aws} width={100} />

        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Vercel} width={60} />
          <span className={'text-[12px] font-bold'}>Vercel</span>
        </div>
      </div>
    </div>
  );
}
