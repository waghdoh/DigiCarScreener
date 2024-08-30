import { Helmet } from "react-helmet";
import SplashscreenRow from "./SplashscreenRow";
import React from "react";

export default function SplashscreenPage() {
  return (
    <>
      <Helmet>
        <title>Splash screen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
        <SplashscreenRow />
      </div>
    </>
  );
}
