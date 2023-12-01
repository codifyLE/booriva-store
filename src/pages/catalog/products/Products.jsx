import { Link } from 'react-router-dom'
import styles from "./Products.module.scss";

import Filter from "./../products/filter/Filter";

import Card from "./../../../components/card/Card";
import cardImage from "./../../../assets/img/png/cardImg.png";

const Products = () => {
  return (
    <div className="container">
      <section>
        <div className={styles.products}>
          <Filter />
          <div className={styles.cards}>
            <Link to="/CardProduct" style={{textDecoration: 'none'}}>
              <Card
                subtitle="Cвитшот вставка клетка"
                price="1 099 ₴"
                image={cardImage}
              />
            </Link>
            <Link to="/CardProduct" style={{textDecoration: 'none'}}>
              <Card
                subtitle="Cвитшот вставка клетка"
                price="1 099 ₴"
                image={cardImage}
              />
            </Link>
            <Link to="/CardProduct" style={{textDecoration: 'none'}}>
              <Card
                subtitle="Cвитшот вставка клетка"
                price="1 099 ₴"
                image={cardImage}
              />
            </Link>
            <Link to="/CardProduct" style={{textDecoration: 'none'}}>
              <Card
                subtitle="Cвитшот вставка клетка"
                price="1 099 ₴"
                image={cardImage}
              />
            </Link>
            <Link to="/CardProduct" style={{textDecoration: 'none'}}>
              <Card
                subtitle="Cвитшот вставка клетка"
                price="1 099 ₴"
                image={cardImage}
              />
            </Link>
            <Link to="/CardProduct" style={{textDecoration: 'none'}}>
              <Card
                subtitle="Cвитшот вставка клетка"
                price="1 099 ₴"
                image={cardImage}
              />{" "}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
