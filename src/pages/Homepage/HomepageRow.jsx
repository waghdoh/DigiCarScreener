import { formatDate, formatGPSLocation } from "util/NumberFormatters";
import React, { useState } from "react";
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
      <div className="flex flex-col gap-1.5 border border-solid border-gray-300_01 bg-white-a700 p-2.5 dark:bg-dark-700 dark:border-dark-600">
        <div className="flex items-center justify-between gap-5">
          <Heading
            size="headinglg"
            as="h1"
            className="mb-1 self-end !font-lato1 text-black-900 dark:text-white-a700"
          >
            Latest Capture
          </Heading>
          <button
            onClick={togglePatrol}
            className="flex items-center gap-2.5 border border-solid border-black-900 p-2 w-[160px] dark:border-dark-600 p-2 bg-white-a700 dark:bg-dark-700"
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
            <h2 className="!font-lato1 uppercase tracking-[-0.27px] text-black-900 dark:text-white-a700">
              {isPatrolStarted ? "Stop Patrol" : "Start Patrol"}
            </h2>
          </button>
        </div>
        <div className="flex justify-between gap-4 bg-gradient px-5 py-1 md:flex-col">
          <div className="flex flex-col items-start gap-1">
            <Heading
              as="p"
              className="font-bold text-black-900 dark:text-white-a700 whitespace-nowrap"
            >
              Camera ID
            </Heading>
            <Text
              as="p"
              className="text-black-900 dark:text-white-a700 whitespace-nowrap"
            >
              {latestCaptureData?.CameraID || "--"}
            </Text>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Heading
              as="p"
              className="font-bold text-black-900 dark:text-white-a700 whitespace-nowrap"
            >
              License No/State
            </Heading>
            <Text
              as="p"
              className="text-black-900 dark:text-white-a700 whitespace-nowrap"
            >
              {latestCaptureData?.LicensePlate && latestCaptureData?.State
                ? latestCaptureData?.LicensePlate +
                  "/" +
                  latestCaptureData?.State
                : "--"}
            </Text>
          </div>
          <div className="flex flex-col items-start gap-1 md:self-stretch">
            <Heading
              as="p"
              className="font-bold text-black-900 dark:text-white-a700 whitespace-nowrap"
            >
              Make/Model/Color
            </Heading>
            <Text
              as="p"
              className="text-black-900 dark:text-white-a700 whitespace-nowrap"
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
              className="font-bold text-black-900 dark:text-white-a700 whitespace-nowrap"
            >
              Date & Time/GPS
            </Heading>
            <div>
              <Text
                as="p"
                className="text-black-900 dark:text-white-a700 whitespace-nowrap"
              >
                {latestCaptureData?.DateTime
                  ? formatDate(latestCaptureData?.DateTime)
                  : "--"}
              </Text>
            </div>
            {latestCaptureData && (<div className="tooltip-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="red"
                height="15px"
                width="20px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 297 297"
                xml:space="preserve"
              >
                <g>
                  <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645   c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645   C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892   c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z" />
                  <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614   c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901   c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104   C179.265,127.948,165.464,141.901,148.5,141.901z" />
                </g>
              </svg>
              <div className="tooltip-text">
                <span className="p-2">
                  {formatGPSLocation(latestCaptureData?.GPSLocation) || "--"}
                </span>
              </div>
            </div>)}
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
                  <div className="flex h-[164px] ml-[50px] w-[90%] m-auto items-center bg-[url(/images/img_group_115.png)] bg-cover bg-no-repeat p-1.5 md:h-auto">
                    <div className="flex w-full flex-col items-end gap-[26px]"></div>
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
