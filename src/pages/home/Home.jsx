import Categories from "./categories/Categories";
import styles from './Home.module.scss'
import Nav from "../../components/nav/Nav";
import News from "./news/News";
import NewCollection from "./newCollection/NewCollection";
import About from "./about/About";
import Top from "./top/Top";
import Insta from "./insta/Insta";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";



const Home = () => {

  return (
    <div>
      <Nav/>
      <Categories />
      <News />
      <NewCollection />
      <About />
      <Top />
      <Insta />
      <Footer />
    </div>
  );
};

export default Home;
