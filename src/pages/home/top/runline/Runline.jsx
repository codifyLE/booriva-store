import styles from "./Runline.module.scss";

import ticker from './../../../../assets/img/svg/ticker.svg'

const Runline = () => {
  return(
    <div className={styles.runline}>
        <img src={ticker} alt="" />
    </div>
  )
};

export default Runline;