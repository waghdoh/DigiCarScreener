import React from "react";
import { Slider } from "../../components";

export default function CaptureSlider({ dataArray }) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex items-center justify-center gap-1 md:flex-col">
      <div className="relative mx-auto flex w-full md:self-stretch">
        <Slider
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
          items={dataArray.map((carImage, index) => {
            return (
              <img
                src={carImage}
                alt=""
                style={{ width: "40%", height: "50%" }}
              />
            );
          })}
        />
      </div>
    </div>
  );
}
