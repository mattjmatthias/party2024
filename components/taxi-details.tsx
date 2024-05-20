import type { NextPage } from "next";

export type TaxiDetailsType = {
  title?: string;
  image14?: string;
  mins?: string;
  price?: string;
};

const TaxiDetails: NextPage<TaxiDetailsType> = ({
  title,
  image14,
  mins,
  price,
}) => {
  return (
    <div className="w-[300px] flex flex-row items-end justify-start gap-[8px]">
      <div className="flex flex-col items-start justify-end pt-0 pb-2 pr-3 pl-0">
        <img
          className="w-[50px] h-[50px] relative object-contain mix-blend-luminosity"
          alt=""
          src="/frontaltaxicab@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start text-left text-3xl text-black font-futura">
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[80px] z-[1] mq450:text-lgi mq450:leading-[29px]">
            {title}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[5px] mt-[-5px]">
          <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
            <img
              className="w-[17px] h-[17px] relative object-cover"
              alt=""
              src={image14}
            />
          </div>
          <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]">
            {mins}
          </div>
          <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiDetails;
