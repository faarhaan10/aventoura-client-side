import React from "react";
import Banner from "../Banner/Banner";
import Package from "../Package/Package";
import Services from "../Services/Services";
import Faq from "../Faq/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Package></Package>
      <Services></Services>
      <Faq></Faq>
    </div>
  );
};

export default Home;
