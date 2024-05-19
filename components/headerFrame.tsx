import type { NextPage } from "next";

const HeaderFrame: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-end justify-start p-0 box-border gap-[268px] max-w-full h-screen text-center text-77xl text-gray-400 font-futura lg:box-border mq450:gap-[33px] mq825:gap-[67px] mq825:box-border mq1425:flex-wrap mq1425:gap-[134px]">
      <div className="w-[1440px] h-full flex flex-col items-center justify-center box-border relative min-w-[1440px] shrink-0 [debug_commit:1de1738] max-w-full lg:box-border lg:min-w-full mq450:min-w-full mq825:box-border mq825:min-w-full mq1425:flex-1 mq1425:min-w-full">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[1]" />
        <h1 className="m-0 w-[842px] relative text-inherit tracking-[-7px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] mq450:leading-[90px]"
          style={{color: "transparent", WebkitTextStroke: "3px white"}}>
          YOU’RE INVITED
        </h1>
        <div className="w-[842px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full text-5xl text-white font-roboto mq450:mt-5 mq825:mt-0">
          <div className="w-[653px] relative leading-[150%] flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-small ">
            TO A LATE SUMMER PARTY IN BIRMINGHAM
          </div>
        </div>
        <div className="w-[1786px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_893px)]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            alt=""
            src="/333762309-981858436556752-9151091461896511175-n-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderFrame;
