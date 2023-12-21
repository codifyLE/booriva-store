import styles from "./Header.module.scss";

import header from "./../../../assets/img/png/catalogHeadr.png";
import wave from './../../../assets/img/png/wave.png'

const Header = ({menuName, categoryName}) => {
  return (
    <div className="container">
      <section>
        <header>
          <h2>{menuName}</h2>
          <span>{categoryName}</span>
          <div className={styles.image}>
            <img src={header} alt="" />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Header;
