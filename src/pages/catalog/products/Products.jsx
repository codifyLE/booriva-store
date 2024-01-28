import { Link } from "react-router-dom";

import Filter from "./../products/filter/Filter";

import Card from "./../../../components/card/Card";
import styles from "./Products.module.scss";
import News from "../../home/news/News";
import Fave from "../../../components/fave/Fave";

const Products = ({ products, favourites, setFavourites }) => {
  return (
    <div className="container">
      <section>
        <div className={styles.products}>
          <Filter />
          <div className={styles.cards}>
            {products && products.length > 0 ? (
              products.map(({ id, name, price, images }) => (
                <div key={id} className={styles.card__wrap}>
                         <Link
                  to={`/CardProduct?id=${id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.card}>
                    <Card subtitle={name} price={price} image={images[0]} setFavourites={setFavourites} favourites={favourites} id={id} />
                  </div>
                </Link>
                <Fave setFavourites={setFavourites} favourites={favourites} id={id} />
                </div>
              ))
            ) : (
              <h2>товар не найден</h2>
            )}
            {}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
