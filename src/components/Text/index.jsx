import React from "react";

const sizes = {
  textxs: "text-[13px] font-normal not-italic",
  texts: "text-[14px] font-normal not-italic",
};

const Text = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`dark:text-dark-base text-gray-800 font-lato ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
