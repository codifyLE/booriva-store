import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import CardProduct from "./pages/cardProduct/CardProduct";
import WishList from "./pages/wishList/WishList";

const App = () => {
  const location = useLocation();
  useEffect(() => {
     window.scrollTo(0, 0)
  }, [location])
 return(
  <div>
  <Routes>
    <Route path="/" element={<Home /> }/>
    <Route path="/catalog" element={<Catalog /> }/>
    <Route path="/CardProduct" element={<CardProduct />}/>
    <Route path="/WishList" element={<WishList />}/>
  </Routes>

</div>
 )
 }

export default App;
