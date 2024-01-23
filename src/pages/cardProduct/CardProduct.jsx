import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from 'qs'

import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import Insta from "../home/insta/Insta";
import Button from "../../components/button/Button";
import Slider from "./slider/Slider";
import Fave from "../../components/fave/Fave";

import cardImage from "./../../assets/img/png/cardImg.png";
import icon from "./../../assets/img/svg/ord1.svg";
import icon2 from "./../../assets/img/svg/ord2.svg";
import icon3 from "./../../assets/img/svg/ord3.svg";


import styles from "./CardProduct.module.scss";

const CardProduct = () => {
  const [data, setData] = useState(null)
  const location = useLocation()
   useEffect(() => {
    if(location.search){
      const params = qs.parse(location.search.substring(1))
      fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${params.id}`)
      .then((res) => res.json())
      .then((then) => setData(then))
    }
   }, [location])
  return (
    <div className="container">
      <Nav />
      {data ?
      <section>
      <div className={styles.wrap}>
      <div className={styles.items}>
      <Slider images={data.images}/>
     <div className={styles.fave}>
     <Fave/>
     </div>
      </div>
        <div className={styles.title}>
          <div className={styles.subtitle}>
            <h2>{data.name}</h2>
            <span className={styles.price}>{data.price} P</span>
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
          <span className={styles.description}>{data.desc}</span>
          <div className={styles.compound}>
            <span>{data.details}</span>
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
    </section> : "Ошибка сети"}
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
