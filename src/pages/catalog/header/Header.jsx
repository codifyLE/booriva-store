import styles from "./Header.module.scss";

import header from "./../../../assets/img/png/catalogHeadr.png";
import wave from './../../../assets/img/svg/wave.svg'

const Header = ({menuName, categoryName}) => {
  return (
    <div className="container">
      <section>
        <header>
          <h2>{menuName}</h2>
          <span>{categoryName} <img src={wave} alt="" /></span>
          <div className={styles.image}>
            <img src={header} alt="" />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Header;
