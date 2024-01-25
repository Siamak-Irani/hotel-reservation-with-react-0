import React, { Component, useContext } from "react";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";
import Store from "./context";

const FeaturedRooms = () => {
  const { loading, featuredRooms: rooms } = useContext(Store);

  const roomElements = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="py-20 px-0">
      <Title title="امکانات اتاق ها" />
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gridRowGap: "2rem",
          gridColumnGap: "40px",
        }}
        className="w-80vw my-0 mx-auto grid
         md:w-90vw xlg:grid-cols-repeat(auto-fit, minmax(330px, 1fr))
          xlg:shadow-lightShadow
        xlg:max-w-1170px"
      >
        {loading ? <Loading /> : roomElements}
      </div>
    </section>
  );
};

export default FeaturedRooms;
