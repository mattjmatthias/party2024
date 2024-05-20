import type { NextPage } from "next";

const EighteenIntro2: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start p-[80px] mq825:p-[50px] box-border max-w-full text-left text-10xl text-black font-futura mq825:box-border">
      <div className="w-full flex mq825:flex-col-reverse flex-row items-center justify-start relative gap-[29px]">
        <div className="w-full flex items-start justify-start">
          <div className="h-full w-full flex">
            <img
              className="h-full w-[50%] rounded-l-3xs object-cover"
              alt=""
              src="/408777898-745972147554071-967985607280608115-n-1@2x.png"
            />
            <img
              className="h-full w-[50%] rounded-r-3xs object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/437565977-394276430242193-4392705109723593379-n-1@2x.png"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-[24px] box-border">
          <h3 className="m-0 self-stretch relative text-inherit font-extrabold z-[1] mq450:text-3xl mq825:text-10xl">
            MUSIC, DRINKS, FOOD + ENTERTAINMENT
          </h3>
          <div className="self-stretch relative text-3xl leading-[150%] tracking-[-0.75px] font-small-text text-darkslategray-200 z-[1] mq450:text-lgi mq450:leading-[29px]">
            There’ll be cocktails, BBQ*, canapés, entertainment and a DJ until late
          </div>
        </div>
      </div>
    </section>
  );
};

export default EighteenIntro2;
