import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import CardProduct from "./pages/cardProduct/CardProduct";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/catalog" element={<Catalog /> }/>
      <Route path="/CardProduct" element={<CardProduct />}/>
    </Routes>
  </div>
)

export default App;
