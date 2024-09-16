import { formatDate } from "util/NumberFormatters";
import React, { useState, useEffect } from "react";
import { Text, Heading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { stopPatrol, startPatrol } from "store";
import GPSIcon from "components/GPS-top";
import CaptureSlider from "./CaptureSlider";
import { carData } from "MockData/carsData";

export default function HomepageRow(props) {
  const latestCaptureData = props.carData;
  const [isPatrolStarted, setIsPatrolStarted] = useState(false);
  const [carDataFromSocket, setCarDataFromSocket] = useState([]);
  const [ws, setWs] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");
    //const socket = new WebSocket("ws://10.1.10.22:3001");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      //console.log("Message from server:", event.data);
      const incomingData = JSON.parse(event.data);
      dispatch(startPatrol(incomingData));
    };
    setWs(socket);
    return () => {
      socket.close();
    };
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(startPatrol(carDataFromSocket));
  // }, [carDataFromSocket]);

  const togglePatrol = () => {
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
            className="flex items-center gap-2.5 border border-solid border-black-900 p-2 w-[160px] dark:border-dark-600  bg-white-a700 "
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
          <div className="flex flex-col items-start gap-1">
            <Heading
              as="p"
              className="font-bold text-black-900 whitespace-nowrap"
            >
              Camera ID
            </Heading>
            <Text
              as="p"
              className="text-black-900 dark:text-black-900   whitespace-nowrap"
            >
              {latestCaptureData?.CameraID || "--"}
            </Text>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Heading
              as="p"
              className="font-bold text-black-900  whitespace-nowrap"
            >
              License No/State
            </Heading>
            <Text
              as="p"
              className="text-black-900 dark:text-black-900   whitespace-nowrap"
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
              className="font-bold text-black-900  whitespace-nowrap"
            >
              Make/Model/Color
            </Heading>
            <Text
              as="p"
              className="text-black-900  dark:text-black-900  whitespace-nowrap"
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
              className="font-bold text-black-900  whitespace-nowrap"
            >
              Date & Time/GPS
            </Heading>
            {latestCaptureData ? (
              <div className="flex">
                <Text className="text-black-900 dark:text-black-900  whitespace-nowrap">
                  {formatDate(latestCaptureData?.DateTime)}
                </Text>
                <GPSIcon />
              </div>
            ) : (
              "--"
            )}
          </div>
        </div>
        {latestCaptureData ? (
          <CaptureSlider dataArray={latestCaptureData.Images} />
        ) : (
          <div className="flex h-[20vh] items-center justify-center dark:text-white-a700">
            No data Captured! Start Patroling.
          </div>
        )}
      </div>
    </div>
  );
}
