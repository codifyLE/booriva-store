import styles from "./About.module.scss";

import aboutImg from "./../../../assets/img/png/about__img.png";

const About = () => {
  return (
    <div className="container">
      <section>
  <div className={styles.about}>
  <div className={styles.about__title}>
           <h2>BOORIVA <br /> STORE</h2>
          </div>
        <div className={styles.central}>
          <img src={aboutImg} alt="" />

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
  </div>
      </section>
    </div>
  );
};

export default About;
