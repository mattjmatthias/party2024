import type { NextPage } from "next";

const NavigationFooter: NextPage = () => {
  return (
    <footer className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-px pb-12 pr-[79px] pl-20 box-border gap-[46px] max-w-full z-[1] mt-[-1px] text-left text-5xl text-black font-futura mq825:gap-[23px] mq825:pl-10 mq825:pr-[39px] mq825:box-border">
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[88px] min-w-[278px] lg:flex-1 mq450:gap-[44px]">
          <div className="relative leading-[150%] font-bold mq450:text-lgi mq450:leading-[29px]">
            #m&s-summer-party-2024
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-10 w-10 relative rounded object-cover min-h-[40px]"
              loading="lazy"
              alt=""
              src="/buttons--icon@2x.png"
            />
            <img
              className="h-10 w-10 relative rounded object-cover min-h-[40px]"
              loading="lazy"
              alt=""
              src="/buttons--icon-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[624px] flex flex-row items-start justify-start gap-[31.5px] min-w-[624px] max-w-full text-base text-darkslategray-100 font-small-text lg:flex-1 lg:min-w-full mq825:flex-wrap mq825:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
            <div className="self-stretch relative leading-[150%] font-black text-black">Links</div>
            <div className="self-stretch relative leading-[150%] font-medium">Hotels</div>
            <div className="self-stretch relative leading-[150%] font-medium">Bit of Dancing</div>
            <div className="self-stretch relative leading-[150%] font-medium">A Few Drinks</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
            <div className="self-stretch relative leading-[150%] font-black text-black">Travel</div>
            <div className="self-stretch relative leading-[150%] font-medium">Trains</div>
            <div className="self-stretch relative leading-[150%] font-medium">Taxis</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
            <div className="self-stretch relative leading-[150%] font-black text-black">Confirm</div>
            <div className="self-stretch relative leading-[150%] font-medium">RSVP</div>
            <div className="self-stretch relative leading-[150%] font-medium">Finally...</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NavigationFooter;
