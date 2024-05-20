import type { NextPage } from "next";
import Lottie from "react-lottie";
import downLottie from "../public/down.json";

const HeaderFrame: NextPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: downLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="self-stretch flex flex-row items-end justify-start p-0 box-border gap-[268px] max-w-full h-screen text-center text-77xl text-gray-400 font-futura lg:box-border mq450:gap-[33px] mq825:gap-[67px] mq825:box-border mq1425:flex-wrap mq1425:gap-[134px]">
      <div className="w-full h-full flex flex-col items-center justify-center box-border relative min-w-[1440px] shrink-0 [debug_commit:1de1738] max-w-full lg:box-border lg:min-w-full mq450:min-w-full mq825:box-border mq825:min-w-full mq1425:flex-1 mq1425:min-w-full">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[1]" />
        <h1
          className="m-0 w-[842px] relative text-inherit tracking-[-7px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] leading-[90px]"
          style={{ color: "transparent", WebkitTextStroke: "3px white" }}
        >
          YOU’RE INVITED
        </h1>
        <div className="w-full relative z-[2] leading-[150%] flex flex-row items-start justify-center mx-15 py-0 pr-px pl-0 box-border text-5xl text-white font-small-text mq450:mt-5 mq825:mt-0">          
            TO A LATE SUMMER PARTY IN BIRMINGHAM          
        </div>
        <div className="w-full h-full absolute !m-[0] top-[0px] bottom-[0px]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            alt=""
            src="/333762309-981858436556752-9151091461896511175-n-1@2x.png"
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[10px]">
            <Lottie options={defaultOptions} height={150} width={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderFrame;
