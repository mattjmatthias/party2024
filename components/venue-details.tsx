import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type VenueDetailsType = {
  image7?: string;
  title?: string;
  mins?: string;
  am?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const VenueDetails: NextPage<VenueDetailsType> = ({
  image7,
  title,
  mins,
  am,
  propPadding,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const venueDetailsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const minsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0 gap-[9px] text-left text-5xl text-black font-futura"
      style={venueDetailsStyle}
    >
      <img
        className="w-[194px] h-[194px] relative object-cover"
        loading="lazy"
        alt=""
        src={image7}
      />
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <div
            className="relative tracking-[-0.03em] leading-[150%] font-medium z-[1] mq450:text-lgi mq450:leading-[29px]"
            style={title1Style}
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
            className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[77px] mq450:text-lgi mq450:leading-[29px]"
            style={minsStyle}
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
  );
};

export default VenueDetails;
