import type { NextPage } from "next";

export type HotelType = {
  name?: string;
  imgSrc?: string;
  time?: string;
  cost?: string;
  link?: string;
};

const Hotel: NextPage<HotelType> = ({
  name,
  imgSrc,
  time,
  cost,
  link
}) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[10px] mq825:min-w-[145px] mq825:max-w-[145px] min-w-[190px] max-w-[190px]">
            <img
              className="w-[196px] h-[194px] mq825:w-[150px] mq825:h-[150px] relative rounded-3xs object-cover"
              loading="lazy"
              alt=""
              src={imgSrc}
            />
            <div className="flex flex-col items-start justify-start gap-[14px]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-semibold inline-block min-w-[106px] z-[1] mq450:text-lgi mq450:leading-[29px]">
                    {name}
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5px] mt-[-5px]">
                  <div className="flex flex-col items-start justify-start pt-[6px] px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative object-cover mix-blend-luminosity"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="relative tracking-[-0.03em] leading-[150%] font-regular inline-block min-w-[82px] mq450:text-lgi mq450:leading-[29px]">
                    {time}
                  </div>
                  <div className="relative tracking-[-0.03em] leading-[150%] font-regular inline-block min-w-[42px] mq450:text-lgi mq450:leading-[29px]">
                    {cost}
                  </div>
                </div>
              </div>
              <a className="cursor-pointer no-underline [border:none] py-[7px] px-6 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start hover:bg-darkslategray-300"
                href={link}
                target="_blank" rel="noopener noreferrer">
                <div className="relative text-base leading-[28px] font-semibold text-decorate-none font-small-text text-white text-left inline-block min-w-[40px]">
                  Book
                </div>
              </a>
            </div>
          </div>
  );
};

export default Hotel;
