import styles from "./Top.module.scss";
import Runline from "./runline/Runline";
import Card from "./../../../components/card/Card";
import Button from "./../../../components/button/Button";

import topImg from "./../../../assets/img/png/topImg.png";
import cardImage4 from "./../../../assets/img/png/cardImg4.png";
import cardImage3 from "./../../../assets/img/png/cardImg3.png";
import cardImage2 from "./../../../assets/img/png/cardImg2.png";

const Top = () => {
  return (
    <div className="container">
      <Runline />
      <section>
        <div className={styles.top}>
          <div className={styles.images}>
            {/* <div className={styles.card_3}>
    <Card
          subtitle="Cвитшот вставка клетка"
          price="1 099 ₴"
          image={cardImage3}
        />
    <Card
          subtitle="Cвитшот вставка клетка"
          price="1 099 ₴"
          image={cardImage4}
        />
    </div> */}
            <div className={styles.central__img}>
              <img src={topImg} alt="" />
            </div>
            {/* <div className={styles.card_2}>
    <Card
          subtitle="Cвитшот вставка клетка"
          price="1 099 ₴"
          image={cardImage2}
        />
    </div> */}
          </div>
        </div>
        <Button />
      </section>
    </div>
  );
};

export default Top;
