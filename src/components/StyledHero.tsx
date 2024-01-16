import React from "react";
import defaultImg from "../files/images/room-1.jpeg";

type StyledHeroProps = {
  children: React.ReactNode;
  img: string;
};

const SingleRoom = ({ children, img }: StyledHeroProps) => {
  const bgImage = img ? img : defaultImg;
  const style = {
    background: `url(${bgImage})`,
  };

  return (
    <header
      className="min-h-[60vh] flex items-center justify-center"
      style={style}
    >
      {children}
    </header>
  );
};

export default SingleRoom;
