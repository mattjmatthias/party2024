import type { NextPage } from "next";
import { useState } from "react";

const RsvpComponent: NextPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <form action="https://submit-form.com/TsRSWvojS" className="m-0 self-stretch bg-black flex flex-col items-center justify-start pt-[70px] pb-[99px] pr-5 pl-[76px] box-border gap-[33.5px] max-w-full lg:pl-[38px] lg:box-border mq825:gap-[17px] mq825:pt-[45px] mq825:pb-16 mq825:box-border">
      <div className="w-[1440px] h-[651px] relative bg-black hidden max-w-full" />
      <h1 className="m-0 w-[842px] relative text-45xl tracking-[-5px] font-bold font-futura text-center inline-block max-w-full z-[1] mq450:text-19xl mq825:text-32xl"
        style={{color: "transparent", WebkitTextStroke: "2px white"}}>
        RSVP
      </h1>
      <div className="flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[14px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[37px] mq825:gap-[18px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[17px] min-w-[203px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                  <div className="w-[285px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                    <div className="flex-1 relative text-base leading-[150%] font-small-text text-white text-left z-[1]">
                      Name
                    </div>
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch h-[45px] relative font-small-text p-3 text-base text-white text-left rounded-lg box-border min-w-[187px] z-[1] border-[2px] border-solid border-white"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[17px] min-w-[203px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                  <div className="w-[285px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                    <div className="flex-1 relative text-base leading-[150%] font-small-text text-white text-left z-[1]">
                      Email
                    </div>
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch h-[45px] relative font-small-text p-3 text-base text-white text-left rounded-lg box-border min-w-[187px] z-[1] border-[2px] border-solid border-white"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
            </div>
                <div className="flex flex-row items-start justify-start mt-5 py-0 px-[7px] mb-2 box-border">
                  <div className="flex-1 relative text-base font-small-text text-white text-left z-[2]">
                    Any allergies or dietary requirements?
                  </div>
                </div>
            <input
              className="[outline:none] bg-[transparent] self-stretch h-11 relative font-small-text p-3 text-base text-white text-left rounded-lg box-border min-w-[250px] z-[1] border-[2px] border-solid border-white"
              type="text"
              name="allergies"
              id="allergies"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5">
            <div className=" flex flex-row items-start justify-start py-0 px-[7px] box-border">
              <div className="flex-1 relative text-base leading-[150%] font-small-text text-white text-left z-[2]">
                Bringing anyone?
              </div>
            </div>
            <input
              className="[outline:none] bg-[transparent] self-stretch h-11 relative font-small-text p-3 text-base text-white text-left rounded-lg box-border min-w-[250px] z-[1] border-[2px] border-solid border-white"
              type="text"
              name="plus-one"
              id="plus-one"
            />
          </div>
      <div className=" flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start max-w-full gap-[20px] mq825:flex-wrap">
          <div className="flex flex-row items-center justify-center gap-[15px]">
            <input
              type="radio"
              id="yes"
              name="attendance"
              value="yes"
              className="relative rounded-full box-border z-[1] border-[0px] border-solid border-white"
              checked={selectedOption === 'yes'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor="yes" className="flex-1 relative text-base leading-[150%] font-small-text text-white text-left z-[1]">
              Yes, I’m coming
            </label>
          </div>
          <div className="flex flex-row items-center justify-center gap-[15px]">
            <input
              type="radio"
              id="no"
              name="attendance"
              value="no"
              className=" relative rounded-full box-border z-[1] border-[0px] border-solid border-white"
              checked={selectedOption === 'no'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor="no" className="flex-1 relative text-base leading-[150%] font-small-text text-white text-left z-[1]">
              Sorry, I can’t make it
            </label>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div className="w-[842px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <button type="submit" className="cursor-pointer [border:none] py-[6.5px] px-[45.5px] bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-100">
          <div className="relative text-base leading-[28px] font-semibold font-small-text text-black text-left inline-block min-w-[40px]">
            Send
          </div>
        </button>
      </div>
    </form>
  );
};

export default RsvpComponent;
