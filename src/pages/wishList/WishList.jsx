import Button from "./../../components/button/Button";

import Nav from '../../components/nav/Nav';
import Insta from "../home/insta/Insta";
import Footer from "../../components/footer/Footer";

import wish from './../../assets/img/png/wish.png'

import styles from './WishList.module.scss'


const WishList = () => {
    return(
        <div className={styles.wrap}>
            <Nav/>
            <section>
            <div className={styles.items}>
            <div className={styles.title}>
            <h2>список желаний</h2>
            <span>твой тайный список желаний</span>
            </div>
           <div className={styles.img}>
           <img src={wish} alt="" />
           </div>
            <span className={styles.subtitle}>Похоже тебе еще ничего не запало в сердечко....</span>
            <Button />
            </div>
            </section>
            <Insta />
            <Footer />
        </div>
    )
}

export default WishList;