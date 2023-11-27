import styles from "./Categories.module.scss";

import bigImg from "./../../../assets/img/png/bigImg.png";
import bigImg2 from "./../../../assets/img/png/bigImg2.png";
import smallImg from "../../../assets/img/png/smallImg1.png";
import smallImg2 from "../../../assets/img/png/smallImg2.png";
import smallImg3 from "../../../assets/img/png/smallImg3.png";
import smallImg4 from "../../../assets/img/png/smallImg4.png";

const Categories = () => {
  return (
    <div className="container">
      <section>
      <div className={styles.images}>
        <div className={styles.images__left}>
          <div className={styles.left__img__big}>
            <img src={bigImg} alt="" />
          </div>
          <div className={styles.left__img__small}>
            <div>
              {" "}
              <img src={smallImg} alt="" />
            </div>
            <div>
              {" "}
              <img src={smallImg2} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.images__right}>
          <div className={styles.right__img__small}>
            <div>
              {" "}
              <img src={smallImg3} alt="" />
            </div>
            <div>
              {" "}
              <img src={smallImg4} alt="" />
            </div>
          </div>
          <div className={styles.right__img__big}>
            <img src={bigImg2} alt="" />
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Categories;
