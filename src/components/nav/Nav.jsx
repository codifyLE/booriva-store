import Logo from "../logo/Logo";
import styles from "./Nav.module.scss";
import Basket from "./basket/Basket";
import Contacts from "./contacts/Contacts";
import Favourites from "./favourites/Favourites";
import Menu from "./menu/Menu";
import Search from "./search/Search";

const Nav = () => {
  return (
    <div className="container container_nav">
      <div className={styles.Nav}>
        <section>
          <div className={styles.contacts}>
            <Contacts />
            <div className={styles.logo}>
              <Logo />
            </div>
            <Search />   
            <div className={styles.favourites}>
              <Favourites />
              <Basket />
            </div>
          </div>
          <div className={styles.menu}>
            <Menu />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nav;
