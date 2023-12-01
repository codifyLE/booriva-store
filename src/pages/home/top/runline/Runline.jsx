import styles from "./Runline.module.scss";

import ticker from './../../../../assets/img/svg/ticker.svg'

const Runline = () => {
  return(
    <div className={styles.runline}>
      <div className={styles.images}>
        <img src={ticker} alt="" className={styles.run}/>
        <img src={ticker} alt="" className={styles.run}/>
        <img src={ticker} alt="" className={styles.run}/>
        <img src={ticker} alt="" className={styles.run}/>
      </div>
      <div className={styles.images2}>
        <img src={ticker} alt="" className={styles.run}/>
        <img src={ticker} alt="" className={styles.run}/>
        <img src={ticker} alt="" className={styles.run}/>
        <img src={ticker} alt="" className={styles.run}/>
      </div>
   

    </div>
  )
};

export default Runline;
