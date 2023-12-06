import styles from "./About.module.scss";

import aboutImg from "./../../../assets/img/png/about__img.png";
import bvShop from "./../../../assets/img/svg/BOORIVA STORE.svg";

const About = () => {
  return (
    <div className="container">
      <section>
        <div className={styles.central}>
          <img src={aboutImg} alt="" />
          <div className={styles.about__img}>
            <img src={bvShop} alt="" />
          </div>
          <div className={styles.adress}>
            <span>
              г.Киев, ул. Нижний вал, 37 <br />
              Ежедневно с 11:00 до 21:00
            </span>
          </div>
          <div className={styles.description}>
            <span>
              Ты можешь заказать примерку понравившейся вещи или просто
              заглянуть, гуляя по Подолу, и примерять что-то из в наличии
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
