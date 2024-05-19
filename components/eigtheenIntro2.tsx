import type { NextPage } from "next";

const EighteenIntro2: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center p-[80px] pb-[40px] box-border max-w-full text-left text-17xl text-black font-futura mq825:box-border mq1425:box-border">
      <div className="flex flex-row items-start justify-start max-w-full gap-[20px] mq1425:flex-wrap">
        <div className="h-[372px] w-[581.4px] flex flex-row items-start justify-start relative min-w-[581.4px] max-w-full mq825:min-w-full mq1425:flex-1">
          <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-3xs max-h-full w-[297.4px] object-cover"
              alt=""
              src="/408777898-745972147554071-967985607280608115-n-1@2x.png"
            />
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[283.9px] rounded-3xs max-h-full w-[297.4px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/437565977-394276430242193-4392705109723593379-n-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[561px] flex flex-col items-start justify-start pt-[90px] px-0 pb-0 box-border min-w-[561px] max-w-full mq825:min-w-full mq1425:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h3 className="m-0 self-stretch h-24 relative text-inherit font-bold font-inherit inline-block mq450:text-3xl mq825:text-10xl">
              
                MUSIC, DRINKS, FOOD + ENTERTAINMENT
            </h3>
            <div className="self-stretch relative text-5xl leading-[150%] font-roboto text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
              There’ll be cocktails, BBQ*, canapés, entertainment and a DJ until late!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EighteenIntro2;
