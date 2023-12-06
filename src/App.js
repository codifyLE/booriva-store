import { Route, Routes, useLocation } from "react-router-dom";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import CardProduct from "./pages/cardProduct/CardProduct";
import { useEffect } from "react";

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
  </Routes>
</div>
 )
 }

export default App;
