import styles from './ClothesMenu.module.scss'

const ClothesMenu = () => {
    return(
        <div className='container'>
            <section>
                <div className={styles.clothes}>
                <ul>
                    <li>Комбинезоны</li>
                    <li>Пиджаки</li>
                    <li>Рубашки</li>
                    <li>Свитшоты</li>
                    <li>Худи</li>
                    <li>Топы</li>
                    <li>Футболки</li>
                </ul>
                </div>
            </section>
        </div>
    )
}

export default ClothesMenu;