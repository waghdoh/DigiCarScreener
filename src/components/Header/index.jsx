import { Img, Text, Heading, Switch } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch items-center p-2 bg-white-a700 shadow-xs`}
    >
      <div className="mx-auto flex w-full ml-2 mr-2 items-center justify-between gap-5 sm:flex-col">
        <Img
          src="images/img_header_logo.png"
          alt="Headerlogo"
          className="h-[40px] w-[112px] object-contain"
        />
        <div className="flex  items-center justify-center gap-5 sm:w-full">
          <div className="flex rotate-[-180deg] items-center gap-2.5">
            <Text as="p" className="rotate-[180deg] !font-lato1 !font-medium">
              Light Theme
            </Text>
            <Switch value={false} />
          </div>
          <div className="flex flex-1 items-start justify-center items-center">
            <div className="flex flex-1 items-center justify-center gap-2.5">
              <a href="#">
                <Img
                  src="images/img_ellipse_7.png"
                  alt="Image"
                  className="h-[42px] w-[42px] rounded-[20px] object-cover"
                />
              </a>
              <div className="flex flex-1 flex-col items-start mr-[20px]">
                <Heading as="h6" className="!font-lato1 !font-bold">
                  James Murphy
                </Heading>
                <Text as="p" className="!font-lato1 !font-medium">
                  Officer
                </Text>
              </div>
            </div>
            <Img
              src="images/img_arrow_down.svg"
              alt="Arrowdown"
              className="h-[20px] w-[20px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
