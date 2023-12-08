
import Fave from "../fave/Fave";
import styles from "./Card.module.scss";

const Card = ({ subtitle, price, image }) => {
  return (

      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.card_2} ${styles.card_3}`}>
     <div className={styles.card__img}>
     <img src={image} alt="" />
     </div>
      <div className={styles.title}>
        <span className={styles.subtitle}>{subtitle}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <div>
   </div>
  </div>
  <div>
    <Fave/>
  </div>
      </div>
  );
};

export default Card;
