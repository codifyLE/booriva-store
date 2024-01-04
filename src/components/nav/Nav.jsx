import { useState } from "react";
import Logo from "../logo/Logo";

import styles from "./Nav.module.scss";
import Basket from "./basket/Basket";
import Contacts from "./contacts/Contacts";
import Favourites from "./favourites/Favourites";
import Menu from "./menu/Menu";
import Search from "./search/Search";
import menuicon from './../../assets/img/svg/menu.svg' 
import telegramm from './../../assets/img/svg/telegram.svg' 
import bag from './../../assets/img/svg/bag.svg' 
import wish from './../../assets/img/svg/wishkist.svg' 

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
          <div className={styles.menu} >
            <Menu />
          </div>
        </section>
      </div>
      <div className={styles.navigation}>
          <div className={styles.images}>
           <div className={styles.icon}>
           <img src={menuicon} alt="" />
           <span>Меню</span>
           </div>
            <div className={styles.icon}>
            <img src={telegramm} alt="" />
            <span>Написать</span>
            </div>
           <div className={styles.icon}>
           <img src={bag} alt="" />
           <span>Корзина</span>
           </div>
          <div className={styles.icon}>
          <img src={wish} alt="" />
          <span>Wish list</span>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Nav;
