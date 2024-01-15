import React from "react";
import { useContext } from "react";
import Title from "./Title";
import { Room } from "../lib/type";
import Store from "./context";
// get all unique values
const getUnique = (items: Room[], value: "capacity" | "type") => {
  return [...new Set(items.map((item) => item[value]))];
};

type RoomsFilterProps = {
  rooms: Room[];
};

const RoomsFilter = ({ rooms }: RoomsFilterProps) => {
  // react hooks

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(Store);

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  const typesElements = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  const peopleElements = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="py-2- px-0">
      <Title title="search rooms" />
      <form
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(202px, 1fr))",
          gridRowGap: "2rem",
          gridColumnGap: "40px",
        }}
        className="w-[60vw] my-0 mx-auto grid 
       md:w-[70vw] xlg:w-[95vw] max-w-[1170px]"
      >
        {/* select type */}
        <div className="capitalize">
          <label className="block tracking-mainSpacing mb-2" htmlFor="type">
            room type
          </label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="w-full bg-transparent text-base"
            value={type}
          >
            {typesElements}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="capitalize">
          <label className="block tracking-mainSpacing mb-2" htmlFor="capacity">
            Guests
          </label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="w-full bg-transparent text-base"
            value={capacity}
          >
            {peopleElements}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="capitalize">
          <label className="block tracking-mainSpacing mb-2" htmlFor="price">
            room price ${price}
          </label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="w-full bg-transparent text-base"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="capitalize">
          <label className="block tracking-mainSpacing mb-2" htmlFor="price">
            room size
          </label>
          <div className="flex">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="w-2/5 p-[0.2rem] border-[1px] border-solid border-mainBlack
              rounded-[0.3rem] mr-[0.3rem]"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="w-2/5 p-[0.2rem] border-[1px] border-solid border-mainBlack
              rounded-[0.3rem] mr-[0.3rem]"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="capitalize">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label
              className="tracking-mainSpacing mb-2
              inline-block text-sm ml-[0.5rem]"
              htmlFor="breakfast"
            >
              breakfast
            </label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label
              className="tracking-mainSpacing mb-2
              inline-block text-sm ml-[0.5rem]"
              htmlFor="breakfast"
            >
              pets
            </label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
