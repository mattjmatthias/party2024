import type { NextPage } from "next";

const Rsvp: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[87px] box-border max-w-full mq825:pb-[57px] mq825:box-border">
      <form className="m-0 flex-1 bg-black flex flex-col items-end justify-start pt-[70px] px-[271px] pb-[99px] box-border gap-[25px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pt-[45px] mq825:px-[67px] mq825:pb-16 mq825:box-border mq1425:pl-[135px] mq1425:pr-[135px] mq1425:box-border">
        <div className="w-[1440px] h-[651px] relative bg-black hidden max-w-full" />
        <h1 className="m-0 w-[842px] relative text-45xl tracking-[-0.19em] font-semibold font-futura text-center inline-block [text-shadow:3px_0_0_#fff,_0_3px_0_#fff,_-3px_0_0_#fff,_0_-3px_0_#fff] max-w-full z-[1] mq450:text-19xl mq825:text-32xl">
          RSVP
        </h1>
        <div className="w-[784px] flex flex-row items-start justify-end pt-0 px-8 pb-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[37px] max-w-full mq825:flex-wrap mq825:gap-[18px]">
              <div className="w-[312px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[312px] mq825:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                  <div className="w-[85px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                    <div className="flex-1 relative text-base leading-[150%] tracking-[-0.75px] font-small-text text-white text-left z-[1]">
                      Name
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                    <input
                      className="[outline:none] bg-[transparent] self-stretch h-[45px] relative rounded box-border min-w-[187px] z-[1] border-[2px] border-solid border-white"
                      type="text"
                    />
                    <div className="w-[174px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                      <div className="flex-1 relative text-base leading-[150%] font-roboto text-white text-left z-[2]">
                        Any allergies or dietary requirements?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[241px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                  <div className="relative text-base leading-[150%] font-roboto text-left z-[1]">
                    <span className="text-white">{`Email `}</span>
                    <span className="text-gray-500">
                      (so we can contact you if anything changes)
                    </span>
                  </div>
                </div>
                <input
                  className="[outline:none] bg-[transparent] w-[312px] h-[45px] relative rounded box-border z-[1] border-[2px] border-solid border-white"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[661px] flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border max-w-full">
              <input
                className="[outline:none] bg-[transparent] h-11 flex-1 relative rounded box-border min-w-[250px] max-w-full z-[1] border-[2px] border-solid border-white"
                type="text"
              />
            </div>
            <div className="w-[661px] flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border max-w-full">
              <div className="w-[174px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                <div className="flex-1 relative text-base leading-[150%] font-roboto text-white text-left z-[2]">
                  Bringing anyone?
                </div>
              </div>
              <input
                className="[outline:none] bg-[transparent] self-stretch h-11 relative rounded box-border min-w-[250px] z-[1] border-[2px] border-solid border-white"
                type="text"
              />
            </div>
            <div className="w-[561px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
                <div className="w-[198px] flex flex-row items-start justify-start gap-[15px]">
                  <div className="h-[23px] w-[23px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-white" />
                  <div className="flex-1 relative text-base leading-[150%] font-roboto text-white text-left z-[1]">
                    Yes, I’m coming
                  </div>
                </div>
                <div className="w-[198px] flex flex-row items-start justify-start gap-[15px]">
                  <div className="h-[23px] w-[23px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-white" />
                  <div className="flex-1 relative text-base leading-[150%] font-roboto text-white text-left z-[1]">
                    Sorry, I can’t make it
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[843px] flex flex-row items-start justify-center max-w-full">
          <button className="cursor-pointer [border:none] py-[6.5px] px-[45.5px] bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-100">
            <div className="relative text-base leading-[28px] font-semibold font-small-text text-black text-left inline-block min-w-[40px]">
              Send
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Rsvp;
