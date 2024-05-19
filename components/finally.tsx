import type { NextPage } from "next";
import NavigationLinks from "./navigation-links";

const Finally: NextPage = () => {
  return (
    <section className="self-stretch bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start p-[80px] pb-[40px] box-border gap-[32px] max-w-full z-[1] text-left text-21xl text-black font-small-text mq825:gap-[16px] mq825:box-border">
      <h2 className="m-0 w-[625px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
        Finally....
      </h2>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-5xl mq1425:flex-wrap">
        <div className="w-[515px] flex flex-col items-start justify-start gap-[48px] min-w-[515px] max-w-full mq825:gap-[24px] mq825:min-w-full mq1425:flex-1">
          <NavigationLinks
            rsvp="/rsvp@2x.png"
            rSVPASAP="RSVP ASAP"
            letUsKnowIfYoureComingAsS="Let us know if you’re coming as soon as is convenient, so we can confirm food and staffing"
          />
          <NavigationLinks
            rsvp="/peanutfree@2x.png"
            rSVPASAP="Allergies + diets"
            letUsKnowIfYoureComingAsS="We want to make sure we cater to all allergies and diets so be sure to let us know your needs when sending your RSVP"
            propMixBlendMode="luminosity"
            propOverflow="unset"
          />
        </div>
        <div className="w-[513px] flex flex-col items-start justify-start gap-[48px] min-w-[513px] max-w-full mq825:gap-[24px] mq825:min-w-full mq1425:flex-1">
          <NavigationLinks
            rsvp="/user-1@2x.png"
            rSVPASAP="Feel free to bring a +1"
            letUsKnowIfYoureComingAsS="We’ve hired the whole venue and it accommodates plenty of people so feel free to bring someone as a +1, just let us know for the guest list"
            propMixBlendMode="unset"
            propOverflow="unset"
          />
          <NavigationLinks
            rsvp="/00.svg"
            rSVPASAP="Other things to tell people"
            letUsKnowIfYoureComingAsS="Body text for whatever you’d like to type. Add main takeaway points, quotes, anecdotes, or even a very very short story. "
            propMixBlendMode="unset"
            propOverflow="hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Finally;
