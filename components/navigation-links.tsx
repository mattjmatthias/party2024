import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NavigationLinksType = {
  imgSrc?: string;
  title?: string;
  subTitle?: string;

  /** Style props */
  propMixBlendMode?: CSSProperties["mixBlendMode"];
  propOverflow?: CSSProperties["overflow"];
};

const NavigationLinks: NextPage<NavigationLinksType> = ({
  imgSrc,
  title,
  subTitle,
  propMixBlendMode,
  propOverflow,
}) => {
  const imgSrcIconStyle: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
      overflow: propOverflow,
    };
  }, [propMixBlendMode, propOverflow]);

  return (
    <div className="self-stretch flex flex-col items-start w-full justify-start gap-[8px] text-left text-5xl text-black font-small-text mb-10">
      <img
        className="w-8 h-8 relative object-contain mix-blend-luminosity"
        loading="lazy"
        alt=""
        src={imgSrc}
        style={imgSrcIconStyle}
      />
      <div className="self-stretch relative font-semibold leading-[150%] mq450:text-lgi mq450:leading-[29px]">
        {title}
      </div>
      <div className="self-stretch relative text-xl leading-[150%] font-regular text-darkslategray-200 text-base mq450:leading-[24px]">
        {subTitle}
      </div>
    </div>
  );
};

export default NavigationLinks;
