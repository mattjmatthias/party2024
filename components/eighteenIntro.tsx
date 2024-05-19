import type { NextPage } from "next";

const EighteenIntro: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[123px] box-border max-w-full text-left text-17xl text-white font-futura mq825:pb-20 mq825:box-border">
      <div className="flex-1 bg-black flex flex-row items-start justify-center pt-28 pb-[79px] pr-[105px] pl-20 box-border gap-[118px] max-w-full lg:flex-wrap mq825:gap-[29px] mq825:pt-[73px] mq825:pr-[26px] mq825:pb-[51px] mq825:box-border mq1425:gap-[59px] mq1425:pl-10 mq1425:pr-[52px] mq1425:box-border">
        <div className="h-[598px] w-[1440px] relative bg-black hidden max-w-full" />
        <div className="w-[561px] flex flex-col items-start justify-start pt-[88px] px-0 pb-0 box-border min-w-[561px] max-w-full lg:flex-1 mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1] mq450:text-3xl mq825:text-10xl">
              EIGHTEEN, COLMORE ROW
            </h3>
            <div className="self-stretch relative text-5xl leading-[150%] font-roboto text-gainsboro-200 z-[1] mq450:text-lgi mq450:leading-[29px]">
              It’s in Birmingham City Centre, on the 18th floor of the new 103 Colmore Row building.
            </div>
          </div>
        </div>
        <img
          className="h-[407px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[374px] z-[1] mq825:min-w-full"
          loading="lazy"
          alt=""
          src="/eighteen4@2x.png"
        />
      </div>
    </section>
  );
};

export default EighteenIntro;
