import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type LastTrainComponentType = {
  title?: string;
  pm?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const LastTrainComponent: NextPage<LastTrainComponentType> = ({
  title,
  pm,
  propMinWidth,
}) => {
  const titleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="w-[354px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full text-left text-5xl text-black font-futura">
      <div className="self-stretch flex flex-row items-end justify-start gap-[17px] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
          <img
            className="w-[50px] h-[50px] relative object-cover"
            alt=""
            src="/group-16@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[187px]">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <div
              className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[83px] z-[1] mq450:text-lgi mq450:leading-[29px]"
              style={titleStyle}
            >
              {title}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[34px] mt-[-5px] mq450:gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                <img
                  className="w-[17px] h-[17px] relative object-cover"
                  alt=""
                  src="/time-1@2x.png"
                />
              </div>
              <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[95px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                {pm}
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                <img
                  className="w-[25px] h-[25px] relative object-cover mix-blend-luminosity"
                  alt=""
                  src="/arrivaltime-1@2x.png"
                />
              </div>
              <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                11:05pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastTrainComponent;
