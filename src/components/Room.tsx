import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../files/images/room-1.jpeg";
import { memo } from "react";
import { Room as RoomType } from "../lib/type";

type RoomProps = {
  room: RoomType;
};

const Room = memo(({ room }: RoomProps) => {
  const { name, slug, images, price } = room;
  // console.log(name);
  return (
    <article className="shadow-lightShadow transition-mainTransition
    hover:shadow-darkShadow">
      <div className="img-container relative hover:bg-black/80">
        <img className=" w-full block transition-mainTransition" src={images[0] || defaultImg} alt="single room" />
        <div className="price-top absolute top-0 left-0 bg-black/80 text-mainWhite
        pt-1 px-2.5 pb-2 rounded-br-[1rem] text-[0.5rem] text-center transition-mainTransition">
          <h6 className="mb-0 text-base font-light tracking-mainSpacing">${price}</h6>
          <p>هر شب</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link
        absolute top-1/2 left-1/2 scale-0 transition-all
          duration-300">
          امکانات
        </Link>
      </div>
      <p className="bg-darkGrey capitalize py-2 px -0 text-center
      font-bold tracking-mainSpacing">{name}</p>
    </article>
  );
});

export default Room;
