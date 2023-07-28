import React from "react";
import Nav from "../../components/home-page-component/Nav";
import Hero from "../../components/home-page-component/hero";
import HeroCard from "../../components/home-page-component/hero-card";
import NewArrivalCard from "../../components/home-page-component/NewArrivalCard";
import BigSavingZone from "../../components/home-page-component/BigSavingZone";
import EverydayBetter from "../../components/home-page-component/EverydayBetter";
import MensCategory from "../../components/home-page-component/MensCategory";
import WomensCategory from "../../components/home-page-component/WomensCategory";
import TopBrands from "../../components/home-page-component/TopBrands";
import Limelight from "../../components/home-page-component/Limelight";
import Feedback from "../../components/home-page-component/Feedback";
import Footer from "../../components/home-page-component/Footer";

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <HeroCard />
      <NewArrivalCard />
      <BigSavingZone />
      <EverydayBetter />
      <MensCategory />
      <WomensCategory />
      <TopBrands />
      <Limelight />
      <Feedback />
      <Footer />
    </>
  );
}

export default HomePage;
