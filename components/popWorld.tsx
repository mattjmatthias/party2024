import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PopworldType = {
  image6?: string;
  title?: string;
  mins?: string;
  am?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Popworld: NextPage<PopworldType> = ({
  image6,
  title,
  mins,
  am,
  propWidth,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const title2Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const mins1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[9px] text-left text-5xl text-black font-futura"
      style={frameDivStyle}
    >
      <img
        className="w-[194px] h-[194px] relative object-cover"
        loading="lazy"
        alt=""
        src={image6}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <div
              className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[98px] z-[1] mq450:text-lgi mq450:leading-[29px]"
              style={title2Style}
            >
              {title}
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
            <div
              className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[82px] mq450:text-lgi mq450:leading-[29px]"
              style={mins1Style}
            >
              {mins}
            </div>
            <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
              <img
                className="w-[17px] h-[17px] relative object-cover"
                alt=""
                src="/time-1@2x.png"
              />
            </div>
            <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[82px] mq450:text-lgi mq450:leading-[29px]">
              {am}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popworld;
