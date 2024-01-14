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
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

export default Room;
