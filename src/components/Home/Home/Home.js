import React from "react";
import Banner from "../Banner/Banner";
import FeatherWatch from "../FeatherWatch/FeatherWatch";
import WatchAndModern from "../WatchAndModern/WatchAndModern";
import Services from "./services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatherWatch></FeatherWatch>
      <Services></Services>
      <WatchAndModern></WatchAndModern>
    </div>
  );
};

export default Home;
