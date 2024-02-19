import Git from '../../../../assets/svg/git.svg';
import GitHub from '../../../../assets/svg/github.svg';
import BitBucket from '../../../../assets/svg/bitbucket.svg';

export default function VersionControlStack() {
  return (
    <div
      className={
        'h-fit bg-white px-12 py-8 rounded-md shadow-2xl hover:scale-110 transition-all'
      }
    >
      <span className={'font-noto font-extrabold text-2xl'}>
        Version Control
      </span>
      <div className={'h-[5px] bg-orange-500'} />
      <div className={'flex flex-wrap max-w-[240px] gap-[6px] justify-center'}>
        <img src={Git} width={100} />
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={GitHub} width={60} />
          <span className={'text-[12px] font-bold'}>Github</span>
        </div>
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={BitBucket} width={60} />
          <span className={'text-[12px] font-bold'}>Bit Bucket</span>
        </div>
      </div>
    </div>
  );
}
