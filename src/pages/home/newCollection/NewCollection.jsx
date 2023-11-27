import styles from './NewCollection.module.scss'

import collectionImg from './../../../assets/img/png/newCollection.png'

const NewCollection = () => {
    return(
        <div className={styles.collection}>
            <img src={collectionImg} alt="" />
        </div>
    )
}

export default NewCollection;