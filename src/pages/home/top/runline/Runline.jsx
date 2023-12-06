import styles from "./Runline.module.scss";

import ticker from './../../../../assets/img/svg/ticker.svg'

const Runline = () => {
  return(
    <div className={styles.runline}>
      <div>
      <img src={ticker} alt="" className={styles.run}/>
      <img src={ticker} alt="" className={styles.run2}/>
      <img src={ticker} alt="" className={styles.run2}/>
      </div>
    </div>
  )
};

export default Runline;
