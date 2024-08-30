import React from "react";
import { Button, Img, Slider } from "../../components";

export default function CaptureSlider() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
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
  );
}
