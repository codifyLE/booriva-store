import styles from "./Categories.module.scss";

import { Link } from "react-router-dom";

import bigImg from "./../../../assets/img/png/bigImg.png";
import bigImg2 from "./../../../assets/img/png/bigImg2.png";
import smallImg from "../../../assets/img/png/smallImg1.png";
import smallImg2 from "../../../assets/img/png/smallImg2.png";
import smallImg3 from "../../../assets/img/png/smallImg3.png";
import smallImg4 from "../../../assets/img/png/smallImg4.png";
import tshirt from "../../../assets/img/svg/1futbolki.svg";
import niz from "../../../assets/img/svg/2niz.svg";
import verh from "../../../assets/img/svg/3verh.svg";
import dress from "../../../assets/img/svg/platya.svg";
import costume from "../../../assets/img/svg/costume.svg";
import hudi from "../../../assets/img/svg/hudi.svg";

const Categories = () => {
  return (
    <div className="container">
      <section>
        <div className={styles.images}>
          <div className={styles.images__left}>
            <div className={styles.img__big}>
              <Link to="/catalog">
                <img src={bigImg} alt="" />
              </Link>
              <div className={styles.tshirt}>
                <img src={tshirt} alt="" />
              </div>
            </div>
            <div className={styles.img__small}>
              <div className={styles.small1}>
                <Link to="/catalog">
                  {" "}
                  <img src={smallImg} alt="" />
                </Link>
                <div className={styles.niz}>
                  <img src={niz} alt="" />
                </div>
              </div>
              <div className={styles.small2}>
                <Link to="/catalog">
                  {" "}
                  <img src={smallImg2} alt="" />
                </Link>
                <div className={styles.verh}>
                  <img src={verh} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.images__right}>
            <div className={styles.right__small}>
              <div className={styles.small3}>
                <Link to="/catalog">
                  <img src={smallImg3} alt="" />
                </Link>
                <div className={styles.dress}>
                  <img src={dress} alt="" />
                </div>
              </div>
              <div className={styles.small4}>
                <Link to="/catalog">
                  {" "}
                  <img src={smallImg4} alt="" />
                </Link>
                <div className={styles.costume}>
                  <img src={costume} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.right__big}>
              <Link to="/catalog">
                {" "}
                <img src={bigImg2} alt="" />
              </Link>
              <div className={styles.hudi}>
                <img src={hudi} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
