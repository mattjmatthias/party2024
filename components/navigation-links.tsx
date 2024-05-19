import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NavigationLinksType = {
  rsvp?: string;
  rSVPASAP?: string;
  letUsKnowIfYoureComingAsS?: string;

  /** Style props */
  propMixBlendMode?: CSSProperties["mixBlendMode"];
  propOverflow?: CSSProperties["overflow"];
};

const NavigationLinks: NextPage<NavigationLinksType> = ({
  rsvp,
  rSVPASAP,
  letUsKnowIfYoureComingAsS,
  propMixBlendMode,
  propOverflow,
}) => {
  const rsvpIconStyle: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
      overflow: propOverflow,
    };
  }, [propMixBlendMode, propOverflow]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-5xl text-black font-small-text mb-10">
      <img
        className="w-8 h-8 relative object-contain mix-blend-luminosity"
        loading="lazy"
        alt=""
        src={rsvp}
        style={rsvpIconStyle}
      />
      <div className="self-stretch relative leading-[150%] mq450:text-lgi mq450:leading-[29px]">
        {rSVPASAP}
      </div>
      <div className="self-stretch relative text-xl leading-[150%] font-medium text-gray-100 mq450:text-base mq450:leading-[24px]">
        {letUsKnowIfYoureComingAsS}
      </div>
    </div>
  );
};

export default NavigationLinks;
