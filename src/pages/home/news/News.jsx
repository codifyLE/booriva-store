import styles from "./News.module.scss";
import Card from "../../../components/card/Card";

import title from "./../../../assets/img/svg/Заголовок 1 новинки.svg";
import cardImage from "./../../../assets/img/png/cardImg.png";
import cardImage2 from "./../../../assets/img/png/cardImg2.png";
import cardImage3 from "./../../../assets/img/png/cardImg3.png";
import cardImage4 from "./../../../assets/img/png/cardImg4.png";
import Button from "../../../components/button/Button";

const News = () => {
  return (
    <div className="container">
      <section>
        <div className={styles.news}>
          <img src={title} alt="" />
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
          image={cardImage2}
        />

  
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
  
        
      </div>
      <Button/>
    </div>
  );
};

export default News;
