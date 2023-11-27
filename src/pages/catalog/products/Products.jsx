import styles from './Products.module.scss'

import Card from './../../../components/card/Card'
import cardImage from "./../../../assets/img/png/cardImg.png";

const Products = () => {
    return(
        <div className='container'>
            <section>
                <div className={styles.products}>
                    <div className={styles.filter}>
                        <ul className={styles.categories}>
                        <h2>КАТЕГОРИИ:</h2>
                            <li>Платья</li>
                            <li>Верх</li>
                            <li>Низ</li>
                            <li>Мелочи</li>
                            <li>Костюмы</li>
                        </ul>
                        <ul className={styles.price}>
                            <li>ЦЕНЫ:</li>
                            <li>Все цены</li>
                            <li>до 500</li>
                            <li>500 — 1000</li>
                            <li>1000 — 1500</li>
                            <li>от 1500</li>
                        </ul>
                        <ul className={styles.size}>
                            <li>РАЗМЕР:</li>
                            <li>XS — S</li>
                            <li>S — M</li>
                            <li>M — L</li>
                            <li>L — XL</li>
                        </ul>
                    </div>
                    <div className={styles.cards}>
                      <div className={styles.card}>
                     <div className={styles.first}>
                     <Card 
                            subtitle="Cвитшот вставка клетка"
                            price="1 099 ₴"
                            image={cardImage}
                        />
                     </div>
                    
                           <Card 
                            subtitle="Cвитшот вставка клетка"
                            price="1 099 ₴"
                            image={cardImage}
                        />
                      </div>
                      <div className={styles.card}>
                      <Card 
                            subtitle="Cвитшот вставка клетка"
                            price="1 099 ₴"
                            image={cardImage}
                        />
                        <Card 
                            subtitle="Cвитшот вставка клетка"
                            price="1 099 ₴"
                            image={cardImage}
                        />
                      </div>
                      <div className={styles.card}>
                      <Card 
                            subtitle="Cвитшот вставка клетка"
                            price="1 099 ₴"
                            image={cardImage}
                        />
                        <Card 
                            subtitle="Cвитшот вставка клетка"
                            price="1 099 ₴"
                            image={cardImage}
                        />
                      </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products; 