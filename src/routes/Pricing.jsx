import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PricingCard from "../components/Pricing";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING" text="Chose your trip." />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Pricing;
