import React from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-center mb-16">
      <h4
        className="text-3xl tracking-mainSpacing capitalize
      mb-4"
      >
        {title}
      </h4>
      <div className="w-20 h-20 my-0 mx-auto bg-primaryColor" />
    </div>
  );
};

export default Title;
