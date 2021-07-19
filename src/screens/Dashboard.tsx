import React from "react";
import Jumbotron from "../shared/components/Jumbotron";
import SectionHeader from "../shared/components/SectionHeader";
import TopProducts from "../components/TopProducts";
import BestProducts from "../components/BestProducts";
const Dashboard = () => {
  return (
    <>
      <Jumbotron />
      <SectionHeader title="Our Top Products" route="/products" />
      <TopProducts />
      <SectionHeader title="Our Best Products" route="/products" />
      <BestProducts />
    </>
  );
};

export default Dashboard;
