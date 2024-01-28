import Button from "./../../components/button/Button";

import Nav from '../../components/nav/Nav';
import Insta from "../home/insta/Insta";
import Footer from "../../components/footer/Footer";

import wish from './../../assets/img/png/wish.png'
import wave from './../../assets/img/svg/wave.svg'
import icon from "./../../assets/img/svg/ord1.svg";
import icon2 from "./../../assets/img/svg/ord2.svg";
import icon3 from "./../../assets/img/svg/made.svg";

import styles from './WishList.module.scss'
import { useEffect, useState } from "react";
{/* <img src={wave} alt="" /> */}

const WishList = ({favourites, setFavourites}) => {
  
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //    products.forEach((id) => {
  //     fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //    })
  // }, [favourites])

    return(
        <div className={styles.wrap}>
            <Nav/>
            <section>
            <div className={styles.items}>
            <div className={styles.title}>
            <h2>список желаний</h2>
            <span>твой тайный список желаний </span> 
            </div>
             <div className={styles.img}>
             <img src={wish} alt="" />      
             </div>
            <span className={styles.subtitle}>Похоже тебе еще ничего не запало в сердечко....</span>
            <Button />
            </div>
            <div className={styles.orders}>
        <div className={styles.order}>
          <div className={styles.icon}>
            <img src={icon} alt="" />
          </div>
          <div className={styles.order__title}>
            <h2>Отправка <br /> день в день</h2>
            <span>При заказе до 1800</span>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.icon}>
            <img src={icon2} alt="" />
          </div>
          <div className={styles.order__title}>
            <h2>Легкий <br />
             возврат/обмен</h2>
            <span>В течении 14 дней</span>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.icon}>
            <img src={icon3} alt="" />
          </div>
          <div className={styles.order__title}>
            <h2>Сделано <br />
            в Украине</h2>
            <span>Прям в Киеве</span>
          </div>
        </div>
      </div>
            </section>
            <div className={styles.cards}>
             
            </div>
            <Insta />
            <Footer />
        </div>
    )
}

export default WishList;