import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/featuredSection";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial />
    </div>
  );
}

export default Home;
