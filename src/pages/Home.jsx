import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";


import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Courses />
      <FreeCourse />
      <Features />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
