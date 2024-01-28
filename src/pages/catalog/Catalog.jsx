import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from 'qs';

import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import Insta from "../home/insta/Insta";
import styles from "./Catalog.module.scss";
import Header from "./header/Header";
import Products from "./products/Products";

const Catalog = ({favourites, setFavourites}) => {
  const [products, setProducts] = useState([]);
  const location = useLocation()
  useEffect(() => {
 const params = qs.parse(location.search.substring(1))
 if(params.menuId){
  fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${params.menuId}`)
  .then((res) => res.json())
  .then((data) => setProducts(data))
  .catch((rej) => console.log('error'));
 }else if(params.categoriesId){
  fetch(`https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${params.categoriesId}`)
  .then((res) => res.json())
  .then((data) => setProducts(data))
  .catch((rej) => console.log('error'));
 }else{
  fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000`)
  .then((res) => res.json())
  .then((data) => setProducts(data))
  .catch((rej) => console.log('error'));
 }
  }, [location]);
  console.log(products)

  return (
    <div className="container">
      <Nav />
      <Header menuName={products.length > 0 ? products[0].menuName : ''}
      categoryName={products.length > 0 ? products[0].categoryName : ''}      
      />
      <Products products={products.length > 0 ? products[0].products : []}  setFavourites={setFavourites} favourites={favourites} />
      <Insta />
      <Footer />
    </div>
  );
};

export default Catalog;
