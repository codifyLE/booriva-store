import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
    return(
         <div className={styles.menu}>
            <ul>
                <Link  to='/catalog' style={{textDecoration: 'none'}}> <li>Новинки</li> </Link>
                <Link  to='/catalog' style={{textDecoration: 'none'}}> <li>Платья</li> </Link>
                <Link  to='/catalog' style={{textDecoration: 'none'}}> <li>Верх</li> </Link>
                <Link  to='/catalog' style={{textDecoration: 'none'}}> <li>Низ</li> </Link>
                <Link  to='/catalog' style={{textDecoration: 'none'}}> <li>Куртки</li> </Link>
                <Link  to='/catalog' style={{textDecoration: 'none'}}> <li>Мелочи</li> </Link>
                <Link  to='/catalog' style={{textDecoration: 'none'}}> <li>Костюмы</li> </Link>
                <Link  to='/catalog' style={{textDecoration: 'none'}}> <li>#Boorivagirls</li> </Link>
            </ul>
        </div>
    )
}

export default Menu;