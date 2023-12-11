import styles from "./Top.module.scss";
import Runline from "./runline/Runline";
import Card from "./../../../components/card/Card";
import Button from "./../../../components/button/Button";
import { Link } from "react-router-dom";

import topImg from "./../../../assets/img/png/topImg.png";
import cardImage4 from "./../../../assets/img/png/cardImg4.png";
import cardImage3 from "./../../../assets/img/png/cardImg3.png";
import cardImage2 from "./../../../assets/img/png/cardImg2.png";
import MiniCard from "../../../components/miniCard/MiniCard";

const Top = () => {
  return (
    <div className="container">
      <Runline />
      <section>
        <div className={styles.top}>
          <div className={styles.images}>
            <div className={styles.left__images}>
              <div className={styles.minicards}>
                <div className={styles.mini}>
                  <Link to="/CardProduct" style={{ textDecoration: "none" }}>
                    <MiniCard
                      subtitle="Cвитшот вставка клетка"
                      price="1 099 ₴"
                      image={cardImage3}
                    />
                  </Link>
                </div>
                <Link to="/CardProduct" style={{ textDecoration: "none" }}>
                  <MiniCard
                    subtitle="Cвитшот вставка клетка"
                    price="1 099 ₴"
                    image={cardImage4}
                  />
                </Link>
              </div>
            </div>
            <div className={styles.central__img}>
              <img src={topImg} alt="" />
            </div>
            <div className={styles.card_2}>
              <Link to="/CardProduct" style={{ textDecoration: "none" }}>
                <Card
                  subtitle="Cвитшот вставка клетка"
                  price="1 099 ₴"
                  image={cardImage2}
                />
              </Link>
            </div>
          </div>
        </div>
        <Button />
      </section>
    </div>
  );
};

export default Top;
