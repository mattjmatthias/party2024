import type { NextPage } from "next";
import VenueDetails from "./venue-details";
import Popworld from "./popWorld";

const AfterParty: NextPage = () => {
  return (
    <section className="w-[1347px] flex flex-row items-start justify-start p-[80px] pb-[50px] mq825:p-[50px] box-border max-w-full text-left text-5xl text-black font-futura lg:box-border mq825:box-border mq1425:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[44px] max-w-full mq825:gap-[22px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-13xl font-small-text">
          <h2 className="m-0 w-[625px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
            If you want to keep going after
          </h2>
          <div className="self-stretch relative leading-[150%] text-xl tracking-[-0.75px] font-small-text text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
            Places to dance until late, or go for a few last cocktails, with time from venue and closing time
          </div>
        </div>
        <div className="w-[702px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[30px] max-w-full mq450:pb-[34px] mq450:box-border">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <img
              className="h-[50px] w-[50px] relative object-cover mix-blend-luminosity"
              alt=""
              src="/dance@2x.png"
            />
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[54.8px] mq825:gap-[47px] grid-cols-[repeat(3,_minmax(160px,_1fr))] mq450:grid-cols-[minmax(160px,_1fr)] mq825:justify-center mq825:grid-cols-[repeat(2,_minmax(160px,_278px))]">
            <VenueDetails
              imgSrc="/image-7@2x.png"
              title="Tonight Josephine"
              mins="5 mins"
              am="2:00am"
            />
            <VenueDetails
              imgSrc="/image-8@2x.png"
              title="Rosies"
              mins="12 mins"
              am="4:00am"
            />
            <VenueDetails
              imgSrc="/image-6@2x.png"
              title="Popworld"
              mins="13 mins"
              am="3:00am"
            />
          </div>
        </div>
        <div className="w-[687px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <img
            className="w-[50px] h-[50px] relative object-contain mix-blend-luminosity"
            alt=""
            src="/cocktail@2x.png"
          />
          <div className="self-stretch grid flex-row items-start justify-start gap-[54.8px] mq825:gap-[47px] grid-cols-[repeat(3,_minmax(160px,_1fr))] mq450:grid-cols-[minmax(160px,_1fr)] mq825:justify-center mq825:grid-cols-[repeat(2,_minmax(160px,_278px))]">            
            <VenueDetails
              imgSrc="/image-9@2x.png"
              title="Dirty Martini"
              mins="2 mins"
              am="2:30am"
            />
            <VenueDetails
              imgSrc="/image-12@2x.png"
              title="The Alchemist"
              mins="3 mins"
              am="3:00am"
            />
            <VenueDetails
              imgSrc="/image-10@2x.png"
              title="The Cocktail Club"
              mins="4 mins"
              am="3:00am"
            />                        
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterParty;
