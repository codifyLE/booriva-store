import styles from "./MiniCard.module.scss";

import Fave from "./../../components/fave/Fave";
const MiniCard = ({ subtitle, price, image }) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.card__img}>
          <img src={image} alt="" />
        </div>
        <div className={styles.title}>
          <span className={styles.subtitle}>{subtitle}</span>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
      <div>
        <Fave />
      </div>
    </div>
  );
};

export default MiniCard;
