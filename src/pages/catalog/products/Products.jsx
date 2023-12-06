import { Link } from "react-router-dom";
import styles from "./Products.module.scss";

import Filter from "./../products/filter/Filter";

import Card from "./../../../components/card/Card";
import cardImage from "./../../../assets/img/png/cardImg.png";
import { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://6569c6cede53105b0dd7a33a.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((rej) => rej.json());
  }, []);
  return (
    <div className="container">
      <section>
        <div className={styles.products}>
          <Filter />
          <div className={styles.cards}>
            {product.map(({ id, name, price, images }) => (
              <Link
                to="/CardProduct"
                style={{ textDecoration: "none" }}
                key={id}
              >
                <Card subtitle={name} price={price} image={images[0]} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
