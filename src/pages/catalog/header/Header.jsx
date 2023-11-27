import styles from './Header.module.scss'

import header from './../../../assets/img/png/catalogHeadr.png'

const Header = () => {
    return(
        <div className='container'>
            <section>
                <header>
                    <span>ВЕРХ</span>
                   <div className={styles.image}>
                   <img src={header} alt="" />
                   </div>
                </header>
            </section>
        </div>
    )
}

export default Header;