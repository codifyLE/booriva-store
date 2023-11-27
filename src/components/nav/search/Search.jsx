import styles from './Search.module.scss'

import search from './../../../assets/img/svg/search.svg'

const Search = () => {
    return(
        <div className={styles.searchs}>
         <img src={search} alt="" className={styles.search__icon}/>
         <span>Поиск</span>
        </div>
    )
      
}

export default Search;