import styles from './Menu.module.scss'

const Menu = () => {
    return(
         <div className={styles.menu}>
            <ul>
                <li>Новинки</li>
                <li>Платья</li>
                <li>Верх</li>
                <li>Низ</li>
                <li>Куртки</li>
                <li>Мелочи</li>
                <li>Костюмы</li>
                <li>#Boorivagirls</li>
            </ul>
        </div>
    )
}

export default Menu;