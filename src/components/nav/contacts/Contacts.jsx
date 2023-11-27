import styles from './Contacts.module.scss'

import location from './../../../assets/img/svg/location.svg'
import phone from './../../../assets/img/svg/phone.svg'

const Contacts = () => {
    return(
        <div className={styles.contacts}>
        <div className={styles.adress}>
        <img src={location} alt="" className={styles.location__icon} />
        <span> Киев, Нижний вал, 37</span>
        </div>
        <div className={styles.phone}>
        <img src={phone} alt="" className={styles.phone__icon}/>
        <span>+38 063 843 34 71</span>
        </div>
        </div>
    )
}

export default Contacts;