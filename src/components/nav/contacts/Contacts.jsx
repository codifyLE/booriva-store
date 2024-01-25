import styles from './Contacts.module.scss'

import location from './../../../assets/img/svg/location.svg'
import phone from './../../../assets/img/svg/phone.svg'

const Contacts = () => {
    return(
        <div className={styles.contacts}>
        <div className={styles.adress}>
        <img src={location} alt="" className={styles.location__icon} />
        <a href='https://yandex.ru/maps/-/CDuLi84H'> Грозный, проспект Кадырова 216</a>
        </div>
        <div className={styles.phone}>
        <img src={phone} alt="" className={styles.phone__icon}/>
        <a href='tel:+7839847436'>+7 839 847 43 66</a>
        </div>
        </div>
    )
}

export default Contacts;