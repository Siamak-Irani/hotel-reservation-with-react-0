import React, { Component, useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
const Services = () => {
  const [state, setState] = useState({
    services: [
      {
        icon: <FaCocktail />,
        title: "کوکتل رایگان",
        info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      },
      {
        icon: <FaHiking />,
        title: "پیاده روی بی پایان",
        info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      },
      {
        icon: <FaShuttleVan />,
        title: "شاتل رایگان",
        info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      },
      {
        icon: <FaBeer />,
        title: "بهترین نوشیدنی",
        info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      },
    ],
  });
  return (
    <section className="py-20 px-0 bg-darkGrey text-center">
      <Title title="خدمات" />
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
          gridRowGap: "2rem",
          gridColumnGap: "50px",
        }}
        className="w-90vw my-0 mx-auto grid  xlg:w-95vw xlg:max-w-1170px"
      >
        {state.services.map((item) => {
          return (
            <article key={`item-${item.title}`} className="service">
              <span
                className="inline-block text-primaryColor text-4xl
              mb-6"
              >
                {item.icon}
              </span>
              <h6 className="tracking-mainSpacing">{item.title}</h6>
              <p className="w-4/5 my-0 mx-auto xlg:w-full">{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
