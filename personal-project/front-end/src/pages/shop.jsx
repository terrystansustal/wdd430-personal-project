import React from "react";
import Hero from "../components/hero/hero"
import Popular from '../components/popular/popular'
import Offers from "../components/offers/offers";
import NewCollections from "../components/new-collections/new-collections";
import NewsLetter from "../components/newsletter/newsletter";
import Footer from "../components/footer/footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections/>
      <NewsLetter/>
      <Footer />
    </div>
  );
};

export default Shop;
