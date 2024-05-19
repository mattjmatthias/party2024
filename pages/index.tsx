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

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-[14px] text-gray-200 font-roboto">
      <HeaderFrame />
      <section className="self-stretch flex flex-row items-start justify-center p-[80px] box-border max-w-full text-center text-17xl text-black font-futura lg:box-border">
        <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
          <b className="self-stretch relative mq450:text-3xl mq825:text-10xl">
            6PM-LATE, SAT 14TH SEPTEMBER 2024
          </b>
          <div className="self-stretch relative text-5xl leading-[150%] font-roboto text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
            It’s Matt + Steve’s 45th birthday this year, so we’re throwing a party to celebrate!
          </div>
        </div>
      </section>
      <EighteenIntro />
      <EighteenIntro2 />
      <div className="self-stretch flex flex-row items-end justify-end pt-0 pb-2.5 pr-5 box-border max-w-full">
        <div className="relative leading-[150%] flex items-center shrink-0 max-w-[115%]">
          * Vegan and vegetarian options will be available, and allergies accomodated
        </div>
      </div>
      <section className="w-[1440px] overflow-x-auto flex flex-row items-start justify-start max-w-full">
        <img
          className="self-stretch w-[515px] relative max-h-full shrink-0 object-cover min-h-[388px] [debug_commit:1de1738] z-[2]"
          loading="lazy"
          alt=""
          src="/4e0d4619f9fd773679a05b384bbeeba8-1@2x.png"
        />
        <img
          className="self-stretch w-[581px] relative max-h-full shrink-0 object-cover min-h-[388px] [debug_commit:1de1738] z-[1]"
          loading="lazy"
          alt=""
          src="/eighteen7@2x.png"
        />
        <img
          className="self-stretch w-[360px] relative max-h-full shrink-0 object-cover min-h-[388px] [debug_commit:1de1738] z-[2]"
          loading="lazy"
          alt=""
          src="/img-0574-1@2x.png"
        />
        <img
          className="self-stretch w-[232px] relative max-h-full shrink-0 object-cover min-h-[388px] [debug_commit:1de1738] z-[3]"
          loading="lazy"
          alt=""
          src="/img-1468-1@2x.png"
        />
        <img
          className="self-stretch w-[597px] relative max-h-full shrink-0 object-cover min-h-[388px] [debug_commit:1de1738] z-[4]"
          loading="lazy"
          alt=""
          src="/eighteen1@2x.png"
        />
        <img
          className="self-stretch w-[819px] relative max-h-full shrink-0 object-cover min-h-[388px] [debug_commit:1de1738] z-[5]"
          loading="lazy"
          alt=""
          src="/eighteen3@2x.png"
        />
      </section>
      <RsvpComponent />
      <Hotels />
      <TravellingBack />
      <AfterParty />
      <Finally />
        <RsvpComponent />
        <NavigationFooter />
    </div>
  );
};

export default LandingPage;
