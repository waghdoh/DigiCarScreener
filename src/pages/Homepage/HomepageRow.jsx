import React, { useState } from "react";
import { formatDate } from "util/NumberFormatters";
import { Button, Img, Slider, Text, Heading } from "../../components";
import { useDispatch } from "react-redux";
import { stopPatrol, startPatrol } from "store";

export default function HomepageRow(props) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const latestCaptureData = props.carData;
  const [isPatrolStarted, setIsPatrolStarted] = useState(false);
  const dispatch = useDispatch();

  const togglePatrol = () => {
    dispatch(isPatrolStarted ? stopPatrol() : startPatrol());
    setIsPatrolStarted(!isPatrolStarted);
  };
  return (
    <div>
      <div className="flex flex-col gap-1.5 border border-solid border-gray-300_01 bg-white-a700 p-2.5">
        <div className="flex items-center justify-between gap-5">
          <Heading
            size="headinglg"
            as="h1"
            className="mb-1 self-end !font-lato1"
          >
            Latest Capture
          </Heading>
          <button
            onClick={togglePatrol}
            className="flex items-center gap-2.5 border border-solid border-black-900 p-2 w-[160px]"
          >
            <img
              src={
                isPatrolStarted
                  ? "images/img_icon_pause.svg"
                  : "images/play.png"
              }
              alt={isPatrolStarted ? "Iconpause" : "Iconplay"}
              className="h-[24px] w-[24px]"
            />
            <h2 className="!font-lato1 uppercase tracking-[-0.27px]">
              {isPatrolStarted ? "Stop Patrol" : "Start Patrol"}
            </h2>
          </button>
        </div>
        <div className="flex justify-between gap-4 bg-gradient px-5 py-1 md:flex-col">
          <div className="flex flex-col items-start gap-1 ">
            <Heading
              as="p"
              className="font-bold !dark:text-dark-base  text-black-900 whitespace-nowrap"
            >
              Camera ID
            </Heading>
            <Text
              as="p"
              className="!dark:text-dark-base  text-black-900 whitespace-nowrap"
            >
              {latestCaptureData?.CameraID || "--"}
            </Text>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Heading
              as="p"
              className="font-bold !dark:text-dark-base  text-black-900 whitespace-nowrap"
            >
              License No/State
            </Heading>
            <Text
              as="p"
              className="!dark:text-dark-base  text-black-900 whitespace-nowrap"
            >
              {latestCaptureData?.LicensePlate && latestCaptureData?.State
                ? latestCaptureData?.LicensePlate +
                  "/" +
                  latestCaptureData?.State
                : "--"}
            </Text>
          </div>
          {/* <div className="flex flex-col items-start gap-1">
            <Heading
              as="p"
              className="font-bold   !dark:text-dark-base  text-black-900 whitespace-nowrap"
            >
              State
            </Heading>
            <Text
              as="p"
              className="!dark:text-dark-base  text-black-900 whitespace-nowrap"
            >
              {latestCaptureData?.State || "--"}
            </Text>
          </div> */}
          <div className="flex flex-col items-start gap-1 md:self-stretch">
            <Heading
              as="p"
              className="font-bold !dark:text-dark-base  text-black-900 whitespace-nowrap"
            >
              Make/Model/Color
            </Heading>
            <Text
              as="p"
              className="!dark:text-dark-base  text-black-900 whitespace-nowrap"
            >
              {latestCaptureData?.CarModel &&
              latestCaptureData?.CarMake &&
              latestCaptureData?.CarColor
                ? latestCaptureData?.CarMake +
                  "/" +
                  latestCaptureData?.CarModel +
                  "/" +
                  latestCaptureData?.CarColor
                : "--"}
            </Text>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Heading
              as="p"
              className="font-bold !dark:text-dark-base text-black-900 whitespace-nowrap"
            >
              Date & Time/GPS
            </Heading>
            {latestCaptureData ? (
              <div className="flex">
                <Text className="!dark:text-dark-base  text-black-900 whitespace-nowrap">
                  {formatDate(latestCaptureData?.DateTime)}
                </Text>
                <img src="images/gps.svg" />
              </div>
            ) : (
              "--"
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 md:flex-col">
          <div className="relative mx-auto flex w-full md:self-stretch">
            <Slider
              // autoPlay
              // autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 1 },
              }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex h-[164px] ml-[50px]  w-[90%] m-auto items-center bg-[url(/images/img_group_115.png)] bg-cover bg-no-repeat p-1.5 md:h-auto">
                    <div className="flex  w-full flex-col items-end gap-[26px]"></div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <Button
            onClick={() => {
              sliderRef?.current?.slideNext();
            }}
            className="flex h-[24px] w-[24px] items-center justify-center"
          >
            <Img src="images/img_arrow_right.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
}
