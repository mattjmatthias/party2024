import type { NextPage } from "next";

const Hotels: NextPage = () => {
  return (
    <section className="w-[1345px] flex flex-row items-start justify-start p-[80px] pb-[40px] box-border max-w-full text-left text-21xl text-black font-small-text mq825:pb-[83px] mq825:box-border mq1425:box-border">
      <div className="flex-1 flex flex-col items-end justify-start gap-[47px] max-w-full mq825:gap-[23px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
          <h2 className="m-0 w-[625px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
            If you’re staying over
          </h2>
          <div className="self-stretch relative text-5xl leading-[150%] font-roboto text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">{`Hotels with the cost and distance from the venue `}</div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[54.8px] text-5xl font-futura mq825:gap-[27px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[192px] max-w-[196px]">
            <img
              className="w-[196px] h-[194px] relative rounded-3xs object-cover"
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[14px]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[106px] z-[1] mq450:text-lgi mq450:leading-[29px]">
                    Bloc Hotel
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5px] mt-[-5px]">
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover mix-blend-luminosity"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[82px] mq450:text-lgi mq450:leading-[29px]">
                    13 mins
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xl">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[13px] mq450:text-base mq450:leading-[24px]">
                      £
                    </div>
                  </div>
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[42px] mq450:text-lgi mq450:leading-[29px]">
                    105
                  </div>
                </div>
              </div>
              <a className="cursor-pointer [border:none] py-[7px] px-6 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start hover:bg-darkslategray-300"
                href="https://www.blochotels.com/"
                target="_blank" rel="noopener noreferrer">
                <div className="relative text-base leading-[28px] font-semibold font-small-text text-white text-left inline-block min-w-[40px]">
                  Book
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[192px] max-w-[195px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
              <img
                className="h-[194px] w-[193px] relative rounded-3xs object-cover"
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className="w-[164px] flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[110px] z-[1] mq450:text-lgi mq450:leading-[29px]">
                    Easy Hotel
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
                  <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]">
                    7 mins
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xl">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[13px] mq450:text-base mq450:leading-[24px]">
                      £
                    </div>
                  </div>
                  <div className="w-[42px] relative tracking-[-0.03em] leading-[150%] font-medium flex items-center mq450:text-lgi mq450:leading-[29px]">
                    122
                  </div>
                </div>
              </div>
              <a className="cursor-pointer [border:none] py-[7px] px-6 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start hover:bg-darkslategray-300"
                href="https://www.easyhotel.com/hotels/united-kingdom/birmingham/birmingham-city-centre"
                target="_blank" rel="noopener noreferrer">
                <div className="relative text-base leading-[28px] font-semibold font-small-text text-white text-left inline-block min-w-[40px]">
                  Book
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[192px] max-w-[195px]">
            <img
              className="w-[195px] h-[194px] relative rounded-3xs object-cover"
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[14px]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[116px] z-[1] mq450:text-lgi mq450:leading-[29px]">Premier Inn</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.3px] mt-[-5px]">
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover mix-blend-luminosity"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[77px] mq450:text-lgi mq450:leading-[29px]">
                    2 mins
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xl">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[12px] mq450:text-base mq450:leading-[24px]">
                      £
                    </div>
                  </div>
                  <div className="w-10 relative tracking-[-0.03em] leading-[150%] font-medium flex items-center mq450:text-lgi mq450:leading-[29px]">
                    151
                  </div>
                </div>
              </div>
              <a className="cursor-pointer [border:none] py-[7px] px-6 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start hover:bg-darkslategray-300"
                href="https://www.premierinn.com/gb/en/hotels/england/west-midlands/birmingham/birmingham-city-centre-waterloo-street.html?ARRdd=14&ARRmm=09&ARRyyyy=2024&NIGHTS=1&ROOMS=1&ADULT1=2&CHILD1=0&COT1=0&INTTYP1=DB&BRAND=PI"
                target="_blank" rel="noopener noreferrer">
                <div className="relative text-base leading-[28px] font-semibold font-small-text text-white text-left inline-block min-w-[40px]">
                  Book
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[192px] max-w-[191px]">
            <img
              className="w-[191px] h-[194px] relative rounded-3xs object-cover"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="w-[165px] flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[129px] z-[1] mq450:text-lgi mq450:leading-[29px]">
                    Hotel du Vin
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[5.3px] mt-[-5px]">
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover mix-blend-luminosity"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]">
                    3 mins
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xl">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[12px] mq450:text-base mq450:leading-[24px]">
                      £
                    </div>
                  </div>
                  <div className="w-[43px] relative tracking-[-0.03em] leading-[150%] font-medium flex items-center mq450:text-lgi mq450:leading-[29px]">
                    241
                  </div>
                </div>
              </div>
              <a className="cursor-pointer [border:none] py-[7px] px-6 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start hover:bg-darkslategray-300"
                href="https://www.hotelduvin.com/book/room"
                target="_blank" rel="noopener noreferrer">
                <div className="relative text-base leading-[28px] font-semibold font-small-text text-white text-left inline-block min-w-[40px]">
                  Book
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[192px] max-w-[193px]">
            <img
              className="w-[193px] h-[194px] relative rounded-3xs object-cover"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[14px]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium z-[1] mq450:text-lgi mq450:leading-[29px]">
                    The Grand Hotel
                  </div>
                </div>
                <div className="w-[161.9px] flex flex-row items-start justify-start gap-[4px] mt-[-5px]">
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover mix-blend-luminosity"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium shrink-0 mq450:text-lgi mq450:leading-[29px]">
                    3 mins
                  </div>
                  <div className="w-[13px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-xl">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[12px] mq450:text-base mq450:leading-[24px]">
                      £
                    </div>
                  </div>
                  <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[43px] shrink-0 mq450:text-lgi mq450:leading-[29px]">
                    332
                  </div>
                </div>
              </div>
              <a className="cursor-pointer [border:none] py-[7px] px-6 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start hover:bg-darkslategray-300"
                href="https://book.thegrandhotelbirmingham.co.uk/?adult=2&arrive=2024-09-14&chain=9822&child=0&config=initialConfig&currency=GBP&depart=2024-09-15&hotel=30776&level=hotel&locale=en-GB&rooms=1&theme=initialTheme2"
                target="_blank" rel="noopener noreferrer">
                <div className="relative text-base leading-[28px] font-semibold font-small-text text-white text-left inline-block min-w-[40px]">
                  Book
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
