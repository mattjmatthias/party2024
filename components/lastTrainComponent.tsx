import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type LastTrainComponentType = {
  title?: string;
  depart?: string;
  arrive?: string;

  /** Style props */
  prodepartinWidth?: CSSProperties["minWidth"];
};

const LastTrainComponent: NextPage<LastTrainComponentType> = ({
  title,
  depart,
  arrive,
  prodepartinWidth,
}) => {
  const titleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: prodepartinWidth,
    };
  }, [prodepartinWidth]);

  return (
    <div className="w-[354px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full text-left text-3xl font-futura">
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
              className="relative tracking-[-0.03em] leading-[150%] font-semibold inline-block min-w-[83px] z-[1] mq450:text-lgi mq450:leading-[29px]"
              style={titleStyle}
            >
              {title}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[34px] mt-[-5px] mq450:gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-[6px] px-0 pb-0">
                <img
                  className="w-[17px] h-[18px] relative object-cover"
                  alt=""
                  src="/time-1@2x.png"
                />
              </div>
              <div className="relative tracking-[-0.03em] leading-[150%] font-regular inline-block min-w-[95px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                {depart}
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                <img
                  className="w-[17px] h-[22px] relative object-cover mix-blend-luminosity"
                  alt=""
                  src="/arrivaltime-1@2x.png"
                />
              </div>
              <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                {arrive}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastTrainComponent;
