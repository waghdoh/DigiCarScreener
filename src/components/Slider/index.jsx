import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CustomPrevButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white z-10"
  >
    &lt; {/* You can replace this with an icon */}
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white  z-10"
  >
    &gt; {/* You can replace this with an icon */}
  </button>
);
const Slider = React.forwardRef(
  (
    {
      items = [],
      activeIndex = 0,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref
  ) => {
    const isSmall = (index) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS]
                .filter(Boolean)
                .join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <>
        <AliceCarousel
          // renderPrevButton={() => {
          //   return <p className="p-4 absolute left-0 top-0">Previous Item</p>;
          // }}
          // renderNextButton={() => {
          //   return <p className="p-4 absolute right-0 top-0">Next Item</p>;
          // }}
          renderPrevButton={(props) => <CustomPrevButton {...props} />}
          renderNextButton={(props) => <CustomNextButton {...props} />}
          items={slideItems}
          infinite
          ref={ref}
          {...props}
          touchTracking
          mouseTracking
          // disableButtonsControls
        />
      </>
    );
  }
);
export { Slider };
