import React, { Component, useContext, useState } from "react";
import defBcg from "../files/images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link, json, useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import Store from "../components/context";
import ErrorPage from "./ErrorPage";

const SingleRoom = () => {
  const [defaultBcg, setDefaultBcg] = useState(defBcg);
  const params = useParams();
  const { getRoom, rooms } = useContext(Store);

  const room = getRoom(params.slug);

  if (!room) return <ErrorPage status={404} msg="این اتاق یافت نشد!" />

  if (!room) {
    return (
      <div className="text-center uppercase my-8 mx-0">
        <h3>اتاق مورد نظر یافت نشد</h3>
        <Link to="/rooms" className="inline-block no-underline tracking-mainSpacing
        text-mainBlack bg-primaryColor py-[.4rem] px-[.9rem]
        border-2 border-solid border-primaryColor transition-mainTransition
        uppercase cursor-pointer hover:bg-transparent hover:text-primaryColor">
          بازگشت به صفحه اتاق‌ها
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [main, ...defaultImages] = images;

  return (
    <>
      <StyledHero img={images[0] || defaultBcg}>
        <Banner title={`اتاق ${name}`}>
          <Link to="/rooms" className="btn-primary">
            بازگشت به خانه
          </Link>
        </Banner>
      </StyledHero>
      <section className="p-0 pt-20">
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gridRowGap: "2rem",
            gridColumnGap: "50px",
          }}
          className="w-[80vw] my-0 mx-auto grid xlg:w-[95vw] xlg:max-w-[1170px]"
        >
          {defaultImages.map((item, index) => (
            <img className="w-full block" key={index} src={item} alt={name} />
          ))}
        </div>
        <div
          style={{ gridTemplateColumns: "1fr" }}
          className="single-room-info w-[80vw] grid
        my-4 mx-auto xlg:w-[95vw] xlg:max-w-[1170px]"
        >
          <article className="desc my-4 mx-0">
            <h3 className="capitalize tracking-mainSpacing">جزئیات</h3>
            <p className="leading-6">{description}</p>
          </article>
          <article className="info my-4 mx-0 xlg:pl-[3rem]">
            <h3 className="capitalize tracking-mainSpacing">اطلاعات</h3>
            <h6 className="capitalize tracking-mainSpacing font-light">
              قیمت : ${price}
            </h6>
            <h6 className="capitalize tracking-mainSpacing font-light">
              اندازه : {size} SQFT
            </h6>
            <h6 className="capitalize tracking-mainSpacing font-light">
              حداکثر ظرفیت :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6 className="capitalize tracking-mainSpacing font-light">
              {pets ? "pets allowed" : "no pets allowed"}
            </h6>
            <h6 className="capitalize tracking-mainSpacing font-light">
              {breakfast && "free breakfast included"}
            </h6>
          </article>
        </div>
      </section>
      <section
        className="w-[80vw] mx-auto mt-0 mb-12
       xlg:w-[95vw] xlg:max-w-[1170px]"
      >
        <h6 className="capitalize tracking-mainSpacing">امکانات اضافه </h6>
        <ul
          style={{
            gridTemplateColumns: " repeat(auto-fit, minmax(330px, 1fr))",
            gridColumnGap: "2rem",
            gridRowGap: "1rem",
          }}
          className="list-none grid"
        >
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
