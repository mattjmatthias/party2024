import type { NextPage } from "next";
import Image from "next/image";
import eighteen from "../public/eighteen-blk.svg";
import linkedin from "../public/linkedin.svg";
import twitter from "../public/twitter.svg";
import youtube from "../public/youtube.svg";
import Link from "next/link";

const NavigationFooter: NextPage = () => {
  return (
    <footer className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-px pb-12 pr-[79px] pl-20 box-border gap-[46px] max-w-full z-[1] mt-[-1px] text-left text-5xl text-black font-futura mq825:gap-[23px] mq825:pl-10 mq825:pr-[39px] mq825:box-border">
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[88px] mq825:gap-[10px] mq450:gap-[10px] mq825:mb-[20px] min-w-[278px] lg:flex-1">
          <div>
            <div className="relative leading-[150%] font-bold text-10xl mq450:text-lgi mq450:leading-[29px]">
              #m&s-summer-party-2024
            </div>
            <div className="flex">
              <span className="pt-[7px] font-regular text-xl mr-2">at</span>
              <a href="https://www.xandwhy.co.uk/clubspace/eighteen">
                <Image
                  className="inline-block"
                  height={40}
                  width={150}
                  src={eighteen}
                  alt="Follow us on Facebook"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <a href="https://www.facebook.com/xandwhyspace/">
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                loading="lazy"
                alt=""
                src="/buttons--icon@2x.png"
              />
            </a>
            <a href="https://www.instagram.com/eighteenclubspace/">
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                loading="lazy"
                alt=""
                src="/buttons--icon-1@2x.png"
              />
            </a>
            <a href="https://www.linkedin.com/company/x-why">
              <Image
                className="inline-block p-[6.7px] opacity-50"
                height={21}
                width={21}
                src={linkedin}
                alt="Follow us on LinkedIn"
              />
            </a>
            <a href="https://www.twitter.com/xandwhyspace/">
              <Image
                className="inline-block p-2 opacity-50"
                height={22}
                width={22}
                src={twitter}
                alt="Follow us on Twitter"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCQ81z-x45VjasAB6LKKaRyg">
              <Image
                className="inline-block p-2 opacity-50"
                height={23}
                width={23}
                src={youtube}
                alt="Follow us on Youtube"
              />
            </a>
          </div>
        </div>
        <div className="w-auto flex flex-row items-start justify-start gap-[50.5px] min-w-[624px] max-w-full text-base text-darkslategray-100 font-small-text lg:flex-1 lg:min-w-full mq825:flex-wrap mq825:gap-[50px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
            <div className="self-stretch relative leading-[150%] font-black text-black">
              Links
            </div>
            <Link
              href="/#hotels"
              className="no-underline text-black self-stretch relative leading-[150%] font-medium"
            >
              Hotels
            </Link>
            <Link
              href="/#dancing"
              className="no-underline text-black self-stretch relative leading-[150%] font-medium"
            >
              After Party Dancing
            </Link>
            <Link
              href="/#cocktails"
              className="no-underline text-black elf-stretch relative leading-[150%] font-medium"
            >
              After Party Drinks
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
            <div className="self-stretch relative leading-[150%] font-black text-black">
              Travel
            </div>
            <Link
              href="/#trains"
              className="no-underline text-black self-stretch relative leading-[150%] font-medium"
            >
              Trains
            </Link>
            <Link
              href="/#taxis"
              className="no-underline text-black self-stretch relative leading-[150%] font-medium"
            >
              Taxis
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
            <div className="self-stretch relative leading-[150%] font-black text-black">
              Confirm
            </div>
            <Link
              href="/#rsvp"
              className="no-underline text-black self-stretch relative leading-[150%] font-medium"
            >
              RSVP
            </Link>
            <Link
              href="/#finally"
              className="no-underline text-black self-stretch relative leading-[150%] font-medium"
            >
              Finally...
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NavigationFooter;
