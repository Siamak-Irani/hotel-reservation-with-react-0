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
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomElements}
      </div>
    </section>
  );
};

export default FeaturedRooms