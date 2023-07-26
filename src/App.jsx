// import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/hero";
import HeroCard from "./components/hero-card";
import newArrivalCard from "./components/newArrival";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <HeroCard />
      <newArrivalcard/>
    </>
  );
}

export default App;
