import { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('https://640ef1d54ed25579dc40e2a6.mockapi.io/menu')
        .then((res) => res.json())
        .then((data) => setMenu(data))  
        .catch((rej) => rej.json())
    }, [])
    return(
         <div className={styles.menu}>
            <ul>
                {
                    menu.map(({id, name}) => <Link  to='/catalog' style={{textDecoration: 'none'}} key={id}> <li>{name}</li> </Link>)
                }
            </ul>
        </div>
    )
}

export default Menu;