import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import Insta from "../home/insta/Insta";
import styles from "./CardProduct.module.scss";
import Button from "../../components/button/Button";

import cardImage from "./../../assets/img/png/cardImg.png";
import icon from "./../../assets/img/svg/ord1.svg";
import icon2 from "./../../assets/img/svg/ord2.svg";
import icon3 from "./../../assets/img/svg/ord3.svg";

const CardProduct = () => {
  return (
    <div className="container">
      <Nav />
      <section>
        <div className={styles.wrap}>
          <div className={styles.card}>
            <Card
              subtitle="Cвитшот вставка клетка"
              price="1 099 ₴"
              image={cardImage}
            />
          </div>
          <div className={styles.title}>
            <div className={styles.subtitle}>
              <h2>Бомбер Gone Crazy хаки</h2>
              <span className={styles.price}>2 499 ₴</span>
              <span className={styles.size}>Выбрать размер:</span>
              <div className={styles.sizes}>
                <span>XS — S</span>
                <span>S — M</span>
                <span>M — L</span>
                <span>L — XL</span>
              </div>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
            <span className={styles.description}>
              Over size бомбер цвета хаки на резинке с объемными рукавами.
              Фурнитура выполнена в серебряном цвете. Акцентными деталями
              выступают объемные нашитые карманы и капюшон, который
              отстёгивается.
            </span>
            <div className={styles.compound}>
              <h2>Состав:</h2>
              <span>50% вискоза, 50% полиэстер</span>
            </div>
          </div>
        </div>
        <div className={styles.orders}>
          <div className={styles.order}>
            <div className={styles.icon}>
              <img src={icon} alt="" />
            </div>
            <div className={styles.order__title}>
              <h2>Отправляем день в день</h2>
              <span>При заказе до 1800</span>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles.icon}>
              <img src={icon2} alt="" />
            </div>
            <div className={styles.order__title}>
              <h2>Отправляем день в день</h2>
              <span>При заказе до 1800</span>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles.icon}>
              <img src={icon3} alt="" />
            </div>
            <div className={styles.order__title}>
              <h2>Отправляем день в день</h2>
              <span>При заказе до 1800</span>
            </div>
          </div>
        </div>
        <div className={styles.recomendation}>
          <h2>Могут понравится</h2>
        </div>
      </section>
      <div className={styles.cards}>
        <Card
          subtitle="Cвитшот вставка клетка"
          price="1 099 ₴"
          image={cardImage}
        />
        <Card
          subtitle="Cвитшот вставка клетка"
          price="1 099 ₴"
          image={cardImage}
        />
        <Card
          subtitle="Cвитшот вставка клетка"
          price="1 099 ₴"
          image={cardImage}
        />
        <Card
          subtitle="Cвитшот вставка клетка"
          price="1 099 ₴"
          image={cardImage}
        />
      </div>
      <Insta />
      <Footer />
    </div>
  );
};

export default CardProduct;
