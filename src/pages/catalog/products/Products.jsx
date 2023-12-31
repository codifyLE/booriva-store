import { Link } from "react-router-dom";

import Filter from "./../products/filter/Filter";

import Card from "./../../../components/card/Card";
import styles from "./Products.module.scss";

const Products = ({ products }) => {
  return (
    <div className="container">
      <section>
        <div className={styles.products}>
          <Filter />
          <div className={styles.cards}>
            {products && products.length > 0 ? (
              products.map(({ id, name, price, images }) => (
                <Link
                  to={`/CardProduct?id=${id}`}
                  style={{ textDecoration: "none" }}
                  key={id}
                >
                  <Card subtitle={name} price={price} image={images[0]} />
                </Link>
              ))
            ) : (
              <h2>товар не найден</h2>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
