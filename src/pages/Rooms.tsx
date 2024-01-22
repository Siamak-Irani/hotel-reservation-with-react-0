import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import room_2 from "../files/images/room-2.jpeg";

const Rooms = () => {
  return (
    <>
      <Hero
        style={{ backgroundImage: `url(${room_2})` }}
        hero="bg-center bg-cover min-h-[60vh]
    bg-no-repeat flex items-center
    justify-center"
      >
        <Banner title="our rooms">
          <Link
            to="/"
            className="inline-block no-underline tracking-mainSpacing
          text-mainBlack bg-primaryColor py-1.5 px-4 border-2 border-solid
          border-primaryColor transition-mainTransition uppercase cursor-pointer
          hover:bg-transparent hover:text-primaryColor"
          >
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
