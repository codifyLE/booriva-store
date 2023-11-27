import styles from "./Footer.module.scss";
import Logo from "./../../components/logo/Logo";
import instagram from "./../../assets/img/svg/017-instagram-logo 1.svg";
import facebook from "./../../assets/img/svg/016-facebook-logo 1.svg";
import photo from './../../assets/img/png/profilephoto.png'

const Footer = () => {
  return (
    <footer>
      <div className={styles.items}>
        <div className={styles.logo}>
        <Logo />
        </div>
        <div className={styles.info}>
          <ul>
            <h2>инфо</h2>
            <li>Контакты</li>
            <li>Система лояльности</li>
            <li>Обмен и возврат</li>
            <li>Доставка и оплата</li>
          </ul>
          <div className={styles.social2}>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
        </div>
        <div className={styles.adress}>
          <h2>НАШ АДРЕС</h2>
          <span>г.Киев, ул. Нижний Вал, 37</span>
          <span>Пн — Вс: с 11:00 до 21:00</span>
        </div>
        <div className={styles.social}>
          <h2>СОЦ.СЕТИ</h2>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className={styles.about__us}>
          <div className={styles.profile__photo}>
            <img src={photo} alt="" />
          </div>
          <div className={styles.title}>
            <span>
              Нам важно знать, <br /> что ты думаешь про нас! <br /> Просто напиши мне!
            </span>
            <h2>Написать Иванке</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
