import { CAMERA_LIST } from "MockData/carsData";
import { Text, Img, Button, Heading, SelectBox } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { formatDate, formatGPSLocation } from "util/NumberFormatters";
import { useSelector } from "react-redux";

export default function HomepageRowNine() {
  const carData = useSelector((state) => {
    return state.cars.carData;
  });

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("Images", {
        cell: (info) => (
          <div className="flex justify-center  align-middle ">
            <div className="w-full">
              <Img
                src={info.getValue()[0]}
                alt="Image"
                className="h-[26px] w-full object-contain md:h-auto"
              />
              <Text
                as="p"
                className="flex justify-center  align-middle  sm:pr-5"
              >
                {info?.row?.original?.CameraID}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex h-full">
            <Heading
              as="h4"
              className="flex justify-center items-center font-bold border-r w-fill-available border-solid border-gray-300_01 bg-gray-100 pl-2.5 pr-1"
            >
              Camera ID
            </Heading>
          </div>
        ),
        meta: { width: "22%" },
      }),

      tableColumnHelper.accessor("LicensePlate", {
        cell: (info) => {
          const { LicensePlate, StateName } = info.row.original;
          return (
            <Text className="flex justify-center text-center ">
              {LicensePlate}
              <br />
              {StateName}
            </Text>
          );
        },

        header: (info) => (
          <div className="flex">
            <Button className="flex h-[44px] w-fill-available flex-row items-center justify-center border-r border-solid border-gray-300_01 bg-gray-100 px-[7px] text-center text-[16px] font-semibold dark:text-dark-base  text-black-900">
              License/State
            </Button>
          </div>
        ),
        meta: { width: "22%" },
      }),

      tableColumnHelper.accessor("CarMake", {
        cell: (info) => {
          const { CarMake, CarModel, CarColor } = info.row.original;
          return (
            <Text className="flex justify-center text-center ">
              {CarMake}
              <br />
              {CarModel}
              <br />
              {CarColor}
            </Text>
          );
        },

        header: (info) => (
          <div className="flex  flex-1">
            <Heading
              as="h5"
              className="border-r w-fill-available flex  justify-center align-middle border-solid border-gray-300_01 bg-gray-100 py-3  sm:pr-5 whitespace-normal"
            >
              Make/Model/Color
            </Heading>
          </div>
        ),
        meta: { width: "22%" },
      }),

      tableColumnHelper.accessor("DateTime", {
        cell: (info) => (
          <Text className="w-full flex justify-center align-middle leading-4 whitespace-nowrap ">
            {formatDate(info.getValue())}
            <br />
            {formatGPSLocation(info?.row?.original?.GPSLocation)}
            <div className="flex whitespace-nowrap items-end text-xs ml-[-42px]">
              <div className="tooltip-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="red"
                  height="15px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 297 297"
                  xmlSpace="preserve"
                  className="hover-svg"
                >
                  <g>
                    <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645   c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645   C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892   c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z" />
                    <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614   c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901   c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104   C179.265,127.948,165.464,141.901,148.5,141.901z" />
                  </g>
                </svg>
                <div className="tooltip-text">
                  <span className="m-2">Visit Map</span>
                </div>
              </div>
              <img src="images/gps.svg" />
            </div>
          </Text>
        ),
        header: (info) => (
          <div className="flex">
            <Heading
              as="h6"
              className="bg-gray-100 whitespace-nowrap py-3 w-fill-available"
            >
              Date & Time/GPS
            </Heading>
          </div>
        ),
        // meta: { width: "102px" },
      }),
    ];
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2.5 border border-solid border-gray-300_01 bg-white-a700 dark:bg-dark-700 dark:border-dark-600">
        <div className="ml-2.5 flex items-center justify-center md:ml-0 sm:flex-col">
          <Heading
            size="headinglg"
            as="h3"
            className="self-end !font-lato1 sm:self-auto text-black-900 dark:text-white-a700"
          >
            Scanning History
          </Heading>
          <div className="flex flex-1 justify-end sm:self-stretch pt-[10px] mr-[10px]">
            <SelectBox
              indicator={
                <Img
                  src="images/img_arrowdown_gray_700.svg"
                  alt="Arrow Down"
                  className="h-[10px] w-[12px]"
                />
              }
              name="assetform_one"
              placeholder={`Select camera`}
              options={CAMERA_LIST}
              className="flex w-[30%] gap-[18px] border border-solid border-gray-300_01 bg-white-a700 dark:bg-dark-700 dark:border-dark-600 p-2 font-lato1 text-[14px] text-blue_gray-400 dark:text-white-a700"
            />
            <div className="relative h-[36px] w-[200px] content-center md:h-auto">
              <div className="mx-auto flex flex-1 justify-center gap-1 px-1">
                <div className="h-[36px] flex-1 border border-solid border-gray-300_01 bg-white-a700 dark:bg-dark-700 dark:border-dark-600" />
                <Button className="flex h-[36px] w-[36px] items-center justify-center border border-solid border-black-900 dark:border-dark-600 px-1.5 bg-white-a700 dark:bg-dark-700">
                  <Img src="images/img_icon_export.svg" />
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 px-3.5">
                <Text
                  as="p"
                  className="!font-lato1 !text-blue_gray-400 dark:!text-white-a700"
                >
                  Enter license plate{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* <Table /> */}

        <div className="mx-2.5 flex gap-2.5 bg-white-a700 dark:bg-dark-700 md:mx-0 md:flex-col">
          <ReactTable
            size="xs"
            variant="striped"
            bodyProps={{ className: "max-h-10" }}
            headerProps={{
              className:
                "border-gray-300_01 border-t border-l border-r border-solid dark:border-dark-600 h-[32px]",
            }}
            cellProps={{
              className:
                "border-gray-300_01 border-t border-l border-r border-solid dark:border-dark-600",
            }}
            className="flex-1 md:px-5 sm:block sm:overflow-x-auto sm:whitespace-nowrap w-full h-full"
            columns={tableColumns}
            data={carData}
          />
        </div>
      </div>
    </div>
  );
}
