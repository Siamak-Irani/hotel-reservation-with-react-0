import React from "react";

type BannerProps = {
  children:React.ReactNode;
  title:string,
  subtitle:string
}

const Banner = ({ children, title, subtitle }:BannerProps) => {
  return (
    <div className="inline-block bg-black/50 text-mainWhite
    py-8 px-4 text-center capitalize tracking-mainSpacing
     xsm:py-8 xsm:px-12 xlg:py-8
    xlg:px-12">
      <h1 className="text-4xl xsm:text-5xl xlg:text-6xl">{title}</h1>
      <div className="w-40 h-1 bg-primaryColor my:m-6 mx-auto" />
      <p className="text-xl mb-16">{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
