import type { NextPage } from "next";
import HeaderFrame from "../components/headerFrame";
import EighteenIntro from "../components/eighteenIntro";
import EighteenIntro2 from "../components/eigtheenIntro2";
import Rsvp from "../components/rsvp";
import Hotels from "../components/hotels";
import TravellingBack from "../components/travellingBack";
import AfterParty from "../components/after-party";
import Finally from "../components/finally";
import RsvpComponent from "../components/rsvpComponent";
import NavigationFooter from "../components/navigation-footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-[12px] text-gray-200 font-roboto">
      <SpeedInsights />
      <HeaderFrame />
      <section className="self-stretch flex flex-row items-start justify-center p-[80px] mq825:p-[50px] box-border bg-whitesmoke-200 max-w-full text-center text-10xl text-black font-futura lg:box-border">
        <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
          <b className="self-stretch relative mq450:text-3xl mq825:text-10xl font-extrabold">
            SAT 14TH SEPTEMBER 2024, 6PM-LATE
          </b>
          <div className="self-stretch relative text-3xl leading-[150%] tracking-[-0.75px] font-small-text text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
            It’s Matt + Steve’s 45th birthday this year, so we’re throwing a party to celebrate!
          </div>
        </div>
      </section>
      <EighteenIntro />
      <EighteenIntro2 />
      <div className="self-stretch flex flex-row items-end justify-end pt-0 pb-2.5 pr-5 box-border max-w-full">
        <div className="relative leading-[150%] flex items-end shrink-0 max-w-full tracking-[-0.2px] font-small-text text-right">
          *Vegan and vegetarian options will be available, and allergies accomodated
        </div>
      </div>
      <section className="w-auto overflow-x-auto flex flex-row items-start justify-start max-w-full">
        <img
          className="self-stretch w-auto relative shrink-0 object-cover max-h-[388px] mq825:max-h-[300px] mq450:max-h-[250px] [debug_commit:1de1738] z-[2]"
          loading="lazy"
          alt=""
          src="/4e0d4619f9fd773679a05b384bbeeba8-1@2x.png"
        />
        <img
          className="self-stretch w-auto relative shrink-0 object-cover max-h-[388px] mq825:max-h-[300px] mq450:max-h-[250px] [debug_commit:1de1738] z-[1]"
          loading="lazy"
          alt=""
          src="/eighteen7@2x.png"
        />
        <img
          className="self-stretch w-auto relative shrink-0 object-cover max-h-[388px] mq825:max-h-[300px] mq450:max-h-[250px] [debug_commit:1de1738] z-[2]"
          loading="lazy"
          alt=""
          src="/img-0574-1@2x.png"
        />
        <img
          className="self-stretch w-auto relative shrink-0 object-cover max-h-[388px] mq825:max-h-[300px] mq450:max-h-[250px] [debug_commit:1de1738] z-[3]"
          loading="lazy"
          alt=""
          src="/img-1468-1@2x.png"
        />
        <img
          className="self-stretch w-auto relative shrink-0 object-cover max-h-[388px] mq825:max-h-[300px] mq450:max-h-[250px] [debug_commit:1de1738] z-[4]"
          loading="lazy"
          alt=""
          src="/eighteen1@2x.png"
        />
        <img
          className="self-stretch w-[819px] relative max-h-full shrink-0 object-cover max-h-[388px] mq825:max-h-[300px] mq450:max-h-[250px] [debug_commit:1de1738] z-[5]"
          loading="lazy"
          alt=""
          src="/eighteen3@2x.png"
        />
      </section>
      <Finally />
      <RsvpComponent displayMoreInfo={true} />
      <Hotels />
      <TravellingBack />
      <AfterParty />
      <RsvpComponent displayMoreInfo={false} />
      <NavigationFooter />
    </div>
  );
};

export default LandingPage;
