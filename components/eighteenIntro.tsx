import type { NextPage } from "next";

const EighteenIntro: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 box-border max-w-full text-left text-10xl text-white font-futura mq825:flex-col mq825:box-border">
      <div className="flex-1 flex flex-row items-center justify-center p-[80px] mq825:p-[50px] bg-black box-border gap-[118px] max-w-full lg:flex-wrap mq825:gap-[29px] mq825:flex-col mq825:box-border mq1425:gap-[59px] mq1425:box-border">
        <div className="flex-1 flex flex-col items-start justify-start px-0 pb-0 box-border max-w-full lg:flex-1 mq825:min-w-full mq825:w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h3 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit z-[1] mq450:text-3xl mq825:text-10xl">
              EIGHTEEN, COLMORE ROW
            </h3>
            <div className="self-stretch relative  leading-[150%] text-3xl tracking-[-0.75px] font-small-text text-gainsboro-200 z-[1] mq450:text-lgi mq450:leading-[29px]">
              It’s in Birmingham City Centre, on the 18th floor of the new 103 Colmore Row building.
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-center mq825:w-full">
          <img
            className="flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1] mq825:min-w-full"
            loading="lazy"
            alt=""
            src="/eighteen4@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default EighteenIntro;
