import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const HomePage = () => {
  return (
    <>
      <Hero>
        <Banner
          title="اتاق های مجلل"
          subtitle="اتاق های لوکس از 299 دلار شروع می شود"
        >
          <Link to="/rooms" className="btn-primary">
            اتاق های ما
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};
export default HomePage;
