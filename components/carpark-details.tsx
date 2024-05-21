import type { NextPage } from "next";

export type CarParkDetailsType = {
  title?: string;
  image14?: string;
  mins?: string;
  price?: string;
};

const CarParkDetails: NextPage<CarParkDetailsType> = ({
  title,
  image14,
  mins,
  price,
}) => {
  return (
    <div className="w-[330px] flex flex-row items-end justify-start gap-[8px]">
      <div className="flex flex-col items-start justify-end pt-0 pb-2 pr-3 pl-0">
        <img
          className="w-[40px] h-[40px] relative object-contain mix-blend-luminosity"
          alt=""
          src="/parked-car.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start text-left text-3xl text-black font-futura">
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <div className="relative tracking-[-0.03em] leading-[150%] font-semibold inline-block z-[1] mq450:text-lgi mq450:leading-[29px]">
            {title}
          </div>
        </div>
        <div className="flex flex-row  gap-[5px] mt-[-5px]">
          <div className="flex flex-col items-start justify-start pt-[6px] px-0 pb-0">
            <img
              className="w-[17px] h-[17px] relative object-cover mix-blend-luminosity"
              alt=""
              src="/image-13@2x.png"
              style={{ filter: "brightness(100%) saturate(0%)" }}
            />
          </div>
          <div className="flex-1 min-w-[90px] relative tracking-[-0.03em] leading-[150%] font-regular mq450:text-lgi mq450:leading-[29px]">
            {mins}
          </div>
          <div className="flex-2 relative tracking-[-0.03em] leading-[150%] font-regular mq450:text-lgi mq450:leading-[29px]">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarParkDetails;
