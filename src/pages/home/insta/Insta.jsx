import styles from "./Insta.module.scss";

import insta from "./../../../assets/img/svg/Instagram.svg";
import inst1 from "./../../../assets/img/png/inst.png";
import inst2 from "./../../../assets/img/png/inst2.png";
import central from "./../../../assets/img/png/instCentral.png";
import rightImg from "./../../../assets/img/png/rightImg1.png";
import rightImg2 from "./../../../assets/img/png/rightImg2.png";
import central2 from "./../../../assets/img/png/instCentral.png";

const Insta = () => {
  return (
    <div className="container">
      <section>
        <div className={styles.instagram}>
          <div className={styles.insta}>
            <div className={styles.left}>
              <div className={styles.insta__items}>
               <h2>Instagram</h2>
              </div>
              <span>
                Мы в экстазе, когда ты нас отмечаешь) <br />
                Отмечай плз чаще
              </span>

              <div className={styles.inst__images}>
                <div className={styles.inst1}>
                  <img src={inst1} alt="" />
                </div>
                <div className={styles.inst2}>
                  <img src={inst2} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.central}>
              <img src={central} alt="" />
            </div>
            <div className={styles.right}>
              <div className={styles.right__images}>
                <div className={styles.right__img1}>
                  <img src={rightImg} alt="" />
                </div>
                <div className={styles.right__img2}>
                  <img src={rightImg2} alt="" />
                </div>
              </div>
              <span>#boorivagirls</span>
              <div className={styles.tag}>
                <span>Ставь тэг чтобы быть в нашей тусовке.</span>
              </div>
            </div>
          </div>
          <div className={styles.central2}>
            <img src={central2} alt="" />
            <h2>#boorivagirls</h2>
            <span>Ставь тэг чтобы быть в нашей тусовке.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insta;
