import styles from "./Categories.module.scss";

import { Link } from "react-router-dom";

import bigImg from "./../../../assets/img/png/bigImg.png";
import bigImg2 from "./../../../assets/img/png/bigImg2.png";
import smallImg from "../../../assets/img/png/smallImg1.png";
import smallImg2 from "../../../assets/img/png/smallImg2.png";
import smallImg3 from "../../../assets/img/png/smallImg3.png";
import smallImg4 from "../../../assets/img/png/smallImg4.png";
import tshirt from "../../../assets/img/svg/tshirt.svg";
import niz from "../../../assets/img/svg/niz.svg";
import verh from "../../../assets/img/svg/verh.svg";
import dress from "../../../assets/img/svg/dress.svg";
import costume from "../../../assets/img/svg/custom.svg";
import hudi from "../../../assets/img/svg/hudi.svg";

const Categories = () => {
  return (
    <div className="container">
      <section>
        <div className={styles.images}>
          <div className={styles.images__left}>
            <div className={styles.img__big}>
            <Link to="/catalog?menuId=004">
                <img src={bigImg} alt="" className={styles.img1}/>
                </Link>
              <div className={styles.tshirt}>
              <Link to="/catalog?menuId=004">
                <img src={tshirt} alt="" />
                <span>Куртки</span>
                </Link>
              </div>
            </div>
            <div className={styles.img__small}>
              <div className={styles.small1}>
              <Link to="/catalog?menuId=003">
                  <img src={smallImg} alt="" className={styles.img2}/>
                  </Link>
                <div className={styles.niz}>
                <Link to="/catalog?menuId=003">
                  <img src={niz} alt="" />
                  <span>Юбки</span>
                  </Link>
                </div>
              </div>
              <div className={styles.small2}>
              <Link to="/catalog?menuId=002">
                  <img src={smallImg2} alt=""  className={styles.img3}/>
                  </Link>
                <div className={styles.verh}>
                <Link to="/catalog?menuId=002">
                  <img src={verh} alt="" />
                  <span>Верх</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.images__right}>
            <div className={styles.right__small}>
              <div className={styles.small3}>
              <Link to="/catalog?menuId=001">
                  <img src={smallImg3} alt="" className={styles.img4}/>
                  </Link>
                <div className={styles.dress}>
                <Link to="/catalog?menuId=001">
                  <img src={dress} alt="" />
                  <span>Платья</span>
                  </Link>
                </div>
              </div>
              <div className={styles.small4}>
              <Link to="/catalog?menuId=006">
                  <img src={smallImg4} alt="" className={styles.img5}/>
                  </Link>
                <div className={styles.costume}>
                <Link to="/catalog?menuId=006">
                  <img src={costume} alt="" />
                  <span>Костюмы</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.right__big}>
               <Link to="/catalog?menuId=005">
                <img src={bigImg2} alt="" className={styles.img6}/>
                </Link>
              <div className={styles.hudi}>
              <Link to="/catalog?menuId=005">
                <img src={hudi} alt="" />
                <span>Мелочи</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
