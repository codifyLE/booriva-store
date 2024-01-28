import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import CardProduct from "./pages/cardProduct/CardProduct";
import WishList from "./pages/wishList/WishList";

const App = () => {
  const location = useLocation();
  const [favourites, setFavourites] = useState(localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [])
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])
  useEffect(() => {
     window.scrollTo(0, 0)
  }, [location])
 return(
  <div>
  <Routes>
    <Route path="/" element={<Home /> }/>
    <Route path="/catalog" element={<Catalog setFavourites={setFavourites} favourites={favourites} /> }/>
    <Route path="/CardProduct" element={<CardProduct />}/>
    <Route path="/WishList" element={<WishList />} favourites={favourites} setFavourites={setFavourites}/>
  </Routes>

</div>
 )
 }

export default App;
