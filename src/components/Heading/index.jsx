import React from "react";

const sizes = {
  texts: "text-[14px] font-medium",
  headingxs: "text-[13px] font-semibold",
  headings: "text-[14px] font-semibold",
  headingmd: "text-[16px] font-semibold",
  headinglg: "text-[18px] font-bold",
};

const Heading = ({
  children,
  className = "",
  size = "headingmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`  text-black-900 font-lato ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
