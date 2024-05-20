import type { NextPage } from "next";
import LastTrainComponent from "./lastTrainComponent";
import TaxiDetails from "./taxi-details";

const TravellingBack: NextPage = () => {
  return (
    <section className="w-[1344px] flex flex-row items-start justify-start p-[80px] pb-[40px] mq825:p-[50px] box-border max-w-full text-left text-13xl text-black font-small-text mq825:box-border mq1425:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full mq825:gap-[21px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[26px] max-w-full">
            <h2 className="m-0 w-[625px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
              If you’re travelling back
            </h2>
            <div className="self-stretch relative text-xl leading-[150%] font-roboto text-darkslategray-200 mq450:text-lgi mq450:leading-[29px] mq825:pb-4">
              Last trains home, its arrival and average Uber cost (UberX/4 people)
            </div>
          </div>
        </div>
        <div className="w-[893px] flex flex-col items-start justify-start gap-[16px] max-w-full text-5xl font-futura">          
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
            <div className="w-[354px] flex flex-col items-start justify-start gap-[16px] max-w-full mq825:pb-12">
              <LastTrainComponent title="Stafford" depart="10:33pm" arrive="11:05pm" prodepartinWidth="57px"  />              
              <LastTrainComponent title="Stoke" depart="10:01" arrive="11:05pm" prodepartinWidth="57px" />              
              <LastTrainComponent title="Derby" depart="10:49pm" arrive="11:05pm" prodepartinWidth="57px"  />              
              <LastTrainComponent title="Bristol" depart="9:12pm" arrive="11:05pm" prodepartinWidth="57px"  />              
              <LastTrainComponent title="London Euston" depart="10:06pm" arrive="11:05pm" prodepartinWidth="57px"  />  
            </div>
            <div className="w-[354px] flex flex-row items-end justify-start gap-[20px]">              
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">                            
                <TaxiDetails title="Stone" image14="/image-14@2x.png" mins="47 mins" price="£75"/>
                <TaxiDetails title="Stoke" image14="/image-14@2x.png" mins="51 mins" price="£83" />  
                <TaxiDetails title="Belper" image14="/image-14@2x.png" mins="1h 10m" price="£70" />  
                <TaxiDetails title="Bristol" image14="/image-14@2x.png" mins="1h 36" price="£180" />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravellingBack;
