import type { NextPage } from "next";
import NavigationLinks from "./navigation-links";

const Finally: NextPage = () => {
  return (
    <section className="self-stretch bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start p-[80px] pb-[40px] mq825:p-[50px] box-border gap-[32px] max-w-full z-[1] text-left text-21xl text-black font-small-text mq825:gap-[16px] mq825:box-border">
      <h2 className="m-0 w-[625px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
        Finally....
      </h2>
      <div className="self-stretch flex flex-col items-start justify-between w-full gap-[5px] text-5xl mq1425:flex-wrap">
        <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[48px] min-w-[515px] max-w-full mq825:gap-[24px] mq825:min-w-full mq1425:flex-1">
          <NavigationLinks
            imgSrc="/rsvp@2x.png"
            title="RSVP ASAP"
            subTitle="Let us know if you’re coming as soon as is convenient, so we can confirm food and staffing"
          />
          <NavigationLinks
            imgSrc="/00.svg"
            title="Other things to tell people"
            subTitle="Body text for whatever you’d like to type. Add main takeaway points, quotes, anecdotes, or even a very very short story. "
          />
        </div>
        <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[48px] min-w-[513px] max-w-full mq825:gap-[24px] mq825:min-w-full mq1425:flex-1">
          <NavigationLinks
            imgSrc="/user-1@2x.png"
            title="Feel free to bring a +1"
            subTitle="We’ve hired the whole venue and it accommodates plenty of people so feel free to bring someone as a +1, just let us know for the guest list"
          />
          <NavigationLinks
            imgSrc="/peanutfree@2x.png"
            title="Allergies + diets"
            subTitle="We want to make sure we cater to all allergies and diets so be sure to let us know your needs when sending your imgSrc"
          />
        </div>
      </div>
    </section>
  );
};

export default Finally;
