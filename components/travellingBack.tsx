import type { NextPage } from "next";
import LastTrainComponent from "./lastTrainComponent";
import TaxiDetails from "./taxi-details";

const TravellingBack: NextPage = () => {
  return (
    <section className="w-[1344px] flex flex-row items-start justify-start p-[80px] pb-[40px] box-border max-w-full text-left text-21xl text-black font-small-text mq825:box-border mq1425:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full mq825:gap-[21px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[26px] max-w-full">
            <h2 className="m-0 w-[625px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
              If you’re travelling back
            </h2>
            <div className="self-stretch relative text-5xl leading-[150%] font-roboto text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
              Last trains home, its arrival and average Uber cost (UberX/4
              people)
            </div>
          </div>
        </div>
        <div className="w-[893px] flex flex-col items-start justify-start gap-[16px] max-w-full text-5xl font-futura">
          <div className="w-[880px] flex flex-col items-start justify-start gap-[13px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
              <LastTrainComponent title="Stafford" pm="10:33pm" />
              <div className="w-[237px] flex flex-row items-end justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-end pt-0 pb-2 pr-4 pl-0">
                  <img
                    className="w-[50px] h-[50px] relative object-contain mix-blend-luminosity"
                    alt=""
                    src="/frontaltaxicab@2x.png"
                  />
                </div>
                <TaxiDetails
                  title="Stone"
                  image14="/image-14@2x.png"
                  mins="47 mins"
                />
                <div className="flex flex-row items-start justify-start gap-[4px] text-xl">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[13px] mq450:text-base mq450:leading-[24px]">
                      £
                    </div>
                  </div>
                  <div className="relative text-5xl tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[29px] mq450:text-lgi mq450:leading-[29px]">
                    75
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-xl mq825:flex-wrap">
              <LastTrainComponent title="Stoke" pm="10:01pm" propMinWidth="57px" />
              <div className="w-[237px] flex flex-row items-end justify-start gap-[8px]">
                <div className="flex flex-col items-start justify-end pt-0 pb-2 pr-3 pl-0">
                  <img
                    className="w-[50px] h-[50px] relative object-contain mix-blend-luminosity"
                    alt=""
                    src="/frontaltaxicab@2x.png"
                  />
                </div>
                <TaxiDetails
                  title="Stoke"
                  image14="/image-14@2x.png"
                  mins="51 mins"
                />
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[13px] mq450:text-base mq450:leading-[24px]">
                        £
                      </div>
                    </div>
                    <div className="relative text-5xl tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[29px] mq450:text-lgi mq450:leading-[29px]">
                      83
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
            <div className="w-[354px] flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch flex flex-row items-end justify-start gap-[5px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-end pt-0 pb-2 pr-3 pl-0">
                  <img
                    className="w-[50px] h-[50px] relative object-contain"
                    alt=""
                    src="/group-16@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[114px]">
                  <div className="flex flex-row items-start justify-start py-0 px-0.5">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[64px] z-[1] mq450:text-lgi mq450:leading-[29px]">
                      Derby
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[5px] mt-[-5px]">
                    <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                      <img
                        className="w-[17px] h-[17px] relative object-cover"
                        alt=""
                        src="/time-1@2x.png"
                      />
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[95px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                        10:49pm
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                        <img
                          className="w-[25px] h-[25px] relative object-cover mix-blend-luminosity"
                          alt=""
                          src="/arrivaltime-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[106px] relative tracking-[-0.03em] leading-[150%] font-medium flex items-center shrink-0 whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                  11:05pm
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-end justify-start gap-[5px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-end pt-0 pb-2 pr-3 pl-0">
                    <img
                      className="w-[50px] h-[50px] relative object-contain"
                      alt=""
                      src="/group-16@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[114px]">
                    <div className="flex flex-row items-start justify-start py-0 px-0.5">
                      <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[62px] z-[1] mq450:text-lgi mq450:leading-[29px]">
                        Bristol
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[5px] mt-[-5px]">
                      <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                        <img
                          className="w-[17px] h-[17px] relative object-cover"
                          alt=""
                          src="/time-1@2x.png"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                        <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[80px] mq450:text-lgi mq450:leading-[29px]">
                          9:12pm
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                        <img
                          className="w-[25px] h-[25px] relative object-cover mix-blend-luminosity"
                          alt=""
                          src="/arrivaltime-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[106px] relative tracking-[-0.03em] leading-[150%] font-medium flex items-center shrink-0 whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                    11:05pm
                  </div>
                </div>
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
                      <div className="relative tracking-[-0.03em] leading-[150%] font-medium z-[1] mq450:text-lgi mq450:leading-[29px]">
                        London Euston
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[39.8px] mt-[-5px] mq450:gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[0.2px]">
                        <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                          <img
                            className="w-[17px] h-[17px] relative object-cover shrink-0 [debug_commit:1de1738]"
                            alt=""
                            src="/time-1@2x.png"
                          />
                        </div>
                        <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[94px] shrink-0 [debug_commit:1de1738] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                          10:06pm
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
            </div>
            <div className="w-[250px] flex flex-row items-end justify-start gap-[20px]">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                <div className="flex flex-col items-start justify-start gap-[33px]">
                  <img
                    className="w-[50px] h-[50px] relative object-cover mix-blend-luminosity"
                    alt=""
                    src="/frontaltaxicab@2x.png"
                  />
                  <img
                    className="w-[50px] h-[50px] relative object-cover mix-blend-luminosity"
                    alt=""
                    src="/frontaltaxicab@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="w-[167px] flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start py-0 pr-px pl-0">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[66px] z-[1] mq450:text-lgi mq450:leading-[29px]">
                      Belper
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[5px] mt-[-7px]">
                    <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0">
                      <img
                        className="w-[17px] h-[17px] relative object-cover"
                        alt=""
                        src="/image-14@2x.png"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="self-stretch relative tracking-[-0.03em] leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]">
                        1h 10m
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xl">
                      <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[13px] mq450:text-base mq450:leading-[24px]">
                        £
                      </div>
                    </div>
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[29px] mq450:text-lgi mq450:leading-[29px]">
                      70
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start py-0 px-0.5">
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[62px] z-[1] mq450:text-lgi mq450:leading-[29px]">
                      Bristol
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[5px] mt-[-5px]">
                    <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                      <img
                        className="w-[17px] h-[17px] relative object-cover"
                        alt=""
                        src="/image-14@2x.png"
                      />
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]">
                      1h 36
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xl">
                      <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[13px] mq450:text-base mq450:leading-[24px]">
                        £
                      </div>
                    </div>
                    <div className="relative tracking-[-0.03em] leading-[150%] font-medium inline-block min-w-[42px] mq450:text-lgi mq450:leading-[29px]">
                      180
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravellingBack;
