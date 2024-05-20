import type { NextPage } from "next";
import Hotel from "./hotelFrame";

const Hotels: NextPage = () => {
  return (
    <section className="w-[1345px] flex flex-row items-start justify-start p-[80px] pb-[0px] mq825:p-[50px] box-border max-w-full text-left text-13xl text-black font-small-text mq825:pb-[83px] mq825:box-border mq1425:box-border">
      <div className="flex-1 flex flex-col items-end justify-start gap-[47px] max-w-full mq825:gap-[23px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
          <h2 className="m-0 w-[625px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
            If you’re staying over
          </h2>
          <div className="self-stretch relative leading-[150%] text-xl tracking-[-0.75px] font-small-text text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
            Hotels with the cost and distance from the venue
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[54.8px] text-3xl font-futura mq825:gap-[47px]">
          <Hotel name="Bloc Hotel" imgSrc="/image-5@2x.png" time="13 mins" cost="£105" link="https://www.blochotels.com/"/>          
          <Hotel name="Easy Hotel" imgSrc="/image-4@2x.png" time="7 mins" cost="£122" link="https://www.easyhotel.com/hotels/united-kingdom/birmingham/birmingham-city-centre"/>   
          <Hotel name="Premier Inn" imgSrc="/image-3@2x.png" time="2 mins" cost="£151" link="https://www.premierinn.com/gb/en/hotels/england/west-midlands/birmingham/birmingham-city-centre-waterloo-street.html?ARRdd=14&ARRmm=09&ARRyyyy=2024&NIGHTS=1&ROOMS=1&ADULT1=2&CHILD1=0&COT1=0&INTTYP1=DB&BRAND=PI"/>   
          <Hotel name="Hotel du Vin" imgSrc="/image-2@2x.png" time="3 mins" cost="£241" link="https://www.hotelduvin.com/book/room"/>   
          <Hotel name="The Grand Hotel" imgSrc="/image-1@2x.png" time="3 mins" cost="£332" link="https://book.thegrandhotelbirmingham.co.uk/?adult=2&arrive=2024-09-14&chain=9822&child=0&config=initialConfig&currency=GBP&depart=2024-09-15&hotel=30776&level=hotel&locale=en-GB&rooms=1&theme=initialTheme2"/>   
        </div>
      </div>
    </section>
  );
};

export default Hotels;
