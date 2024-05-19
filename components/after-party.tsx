import type { NextPage } from "next";
import VenueDetails from "./venue-details";
import Popworld from "./popWorld";

const AfterParty: NextPage = () => {
  return (
    <section className="w-[1347px] flex flex-row items-start justify-start p-[80px] pb-[40px] box-border max-w-full text-left text-5xl text-black font-futura lg:box-border mq825:box-border mq1425:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[44px] max-w-full mq825:gap-[22px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-21xl font-small-text">
          <h2 className="m-0 w-[625px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
            If you want to keep going after
          </h2>
          <div className="self-stretch relative text-5xl leading-[150%] font-roboto text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
            Places to dance until late, or go for a few last cocktails, with time from venue and closing time
          </div>
        </div>
        <div className="w-[702px] flex flex-col items-start justify-start pt-0 px-0 pb-[53px] box-border gap-[22px] max-w-full mq450:pb-[34px] mq450:box-border">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <img
              className="h-[50px] w-[50px] relative object-cover mix-blend-luminosity"
              alt=""
              src="/dance@2x.png"
            />
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[31px] grid-cols-[repeat(3,_minmax(160px,_1fr))] mq450:grid-cols-[minmax(160px,_1fr)] mq825:gap-[15px] mq825:justify-center mq825:grid-cols-[repeat(2,_minmax(160px,_278px))]">
            <VenueDetails
              image7="/image-7@2x.png"
              title="Tonight Josephine"
              mins="5 mins"
              am="2:00am"
            />
            <VenueDetails
              image7="/image-8@2x.png"
              title="Rosies"
              mins="12 mins"
              am="4:00am"
              propPadding="unset"
              propDisplay="inline-block"
              propMinWidth="63px"
              propMinWidth1="82px"
            />
            <Popworld
              image6="/image-6@2x.png"
              title="Popworld"
              mins="13 mins"
              am="3:00am"
            />
          </div>
        </div>
        <div className="w-[687px] flex flex-col items-start justify-start gap-[31px] max-w-full mq825:gap-[15px]">
          <img
            className="w-[50px] h-[50px] relative object-contain mix-blend-luminosity"
            alt=""
            src="/cocktail@2x.png"
          />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px]">
            <Popworld
              image6="/image-9@2x.png"
              title="Dirty Martini"
              mins="2 mins"
              am="2:30am"
              propWidth="209px"
              propDisplay="unset"
              propMinWidth="unset"
              propMinWidth1="77px"
            />
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border gap-[9px] min-w-[144px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[3px]">
                <img
                  className="h-[194px] w-[194px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-12@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium z-[1] mq450:text-lgi mq450:leading-[29px]">
                    The Alchemist
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[5px] mt-[-5px]">
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover mix-blend-luminosity"
                      loading="lazy"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]">
                    3 mins
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/time-1@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[82px] mq450:text-lgi mq450:leading-[29px]">
                    3:00am
                  </div>
                </div>
              </div>
            </div>
            <div className="w-52 flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-start justify-start py-0 px-0.5">
                <img
                  className="h-[194px] w-[193px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-10@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium z-[1] mq450:text-lgi mq450:leading-[29px]">
                    The Cocktail Club
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[5px] mt-[-5px]">
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover mix-blend-luminosity"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[77px] mq450:text-lgi mq450:leading-[29px]">
                    4 mins
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover"
                      alt=""
                      src="/time-1@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[82px] mq450:text-lgi mq450:leading-[29px]">
                    3:00am
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterParty;
