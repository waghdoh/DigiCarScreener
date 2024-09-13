import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, ChipView } from "../../components";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import HomepageRow from "./HomepageRow";
import HomepageRowNine from "./HomepageRowNine";
import { CAMERA_LIST } from "MockData/carsData";
import { useSelector } from "react-redux";

export const AlarmNotification = () => {

  const carData = useSelector((state) => {
    return state.cars.carData;
  });
  const newCarData = [...carData];
  const [chipOptions, setChipOptions] = React.useState(() => CAMERA_LIST);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([1]);
  return (
    
            
   <>
   
   
   <div className="p-4 mt-3 flex flex-col gap-4 border border-solid  dark:border-dark-600 bg-white-a700 dark:bg-dark-700 py-1 h-[48vh]">
    <div className=" mt-3 flex flex-wrap items-center md:mx-0">
      
      <Heading
        size="headinglg"
        as="h3"
        className="!font-lato1 dark:text-white-a700"
      >
        Alarms & Notifications  
      </Heading>
      <Heading
        size="headingxs"
        as="h4"
        className="ml-1 flex h-[20px] w-[20px] items-center justify-center self-start rounded-[10px] bg-black-900  text-center !font-lato1 tracking-[0.13px]  text-white-a700 dark:bg-white-a700 dark:text-black-900"
      >
        {carData.length &&
          carData.filter((car) => car.AlertLevel !== "None").length}
      </Heading>
      <span className="ml-[60rem] font-bold dark:text-gray-200 text-slate-900">Action</span>


     
    </div>
    {carData.length > 0 ? (
      <div className="ml-1 flex flex-col items-end gap-1 md:ml-0">
        <div className="relative h-[156px] self-stretch">
          <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-1.5 flex flex-1 flex-col gap-2 border-solid  border-gray-300_01 dark:border-dark-600 md:relative md:mr-0">
           
            <Suspense fallback={<div>Loading feed...</div>}>
              {carData.map((d, index) => (
                <UserProfile
                  {...d}
                  key={"homepage" + index}
                  className="mr-4 md:mr-0 sm:flex-col "
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex h-[20vh] items-center justify-center dark:text-white-a700">
        No data available.
      </div>
    )}
    </div>
    </>
  )
}
