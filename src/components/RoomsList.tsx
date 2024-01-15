import React from "react";
import Room from "./Room";
import { Room as RoomType } from "../lib/type";

type RoomsListProps = {
  rooms: RoomType[];
};

const RoomsList = ({ rooms }: RoomsListProps) => {
  if (rooms.length === 0) {
    return (
      <div
        className="text-center capitalize my-8 mx-0
      p-4 tracking-mainSpacing"
      >
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="py-20 px-0">
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gridRowGap: "2rem",
          gridColumnGap: "30px",
        }}
        className="w-[80vw] my-0 mx-auto grid md:w-90vw xlg:w-95vw
       xlg:max-w-1170px"
      >
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
