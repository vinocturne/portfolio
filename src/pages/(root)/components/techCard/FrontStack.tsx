import Html from '../../../../assets/svg/html.svg';
import Css from '../../../../assets/svg/css.svg';
import Js from '../../../../assets/svg/javascript.svg';
import Ts from '../../../../assets/svg/typescirpt.svg';
import React from '../../../../assets/svg/react.svg';
import Next from '../../../../assets/svg/next.svg';
import Vue from '../../../../assets/svg/vue.svg';
import Tw from '../../../../assets/svg/tailwind.svg';
import Sass from '../../../../assets/svg/sass.svg';
import Bootstrap from '../../../../assets/svg/bootstrap.svg';
import Rhf from '../../../../assets/svg/react-hook-form.svg';
import Query from '../../../../assets/svg/query.svg';
import Panda from '../../../../assets/svg/panda.svg';
import Framer from '../../../../assets/svg/framer.svg';
export default function FrontStack() {
  return (
    <div
      className={
        'bg-white px-12 py-8 rounded-md shadow-2xl hover:scale-110 transition-all'
      }
    >
      <span className={'font-noto font-extrabold text-2xl'}>Front</span>
      <div className={'h-[5px] bg-orange-500'} />
      <div className={'flex flex-wrap max-w-[240px] gap-[6px] justify-center'}>
        <img src={Html} width={100} />
        <img src={Css} width={100} />
        <img src={Js} width={100} />
        <img src={Ts} width={100} />
        <img src={React} width={100} />
        <img src={Next} width={100} />
        <img src={Vue} width={100} />
        <img src={Tw} width={100} />
        <img src={Sass} width={100} />
        <img src={Bootstrap} width={100} />
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Rhf} width={65} />
          <span className={'text-[12px] font-bold'}>React Hook Form</span>
        </div>
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Query} width={65} />
          <span className={'text-[12px] font-bold'}>Tanstack Query</span>
        </div>
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Panda} width={60} />
          <span className={'text-[12px] font-bold'}>Panda CSS</span>
        </div>
        <div
          className={
            'w-[100px] h-[100px] flex flex-col items-center justify-center'
          }
        >
          <img src={Framer} width={60} />
          <span className={'text-[12px] font-bold'}>Framer Motion</span>
        </div>
      </div>
    </div>
  );
}
