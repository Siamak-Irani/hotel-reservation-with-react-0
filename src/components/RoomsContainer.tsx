import React, { useContext } from "react";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
import Store from "./context";
import RoomsList from "./RoomsList";

function RoomContainer() {
  const { loading, sortedRooms, rooms } = useContext(Store);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;
