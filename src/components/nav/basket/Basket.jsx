import { Link } from 'react-router-dom';

import basket from './../../../assets/img/svg/desctop_bag.svg'

const Basket = () => {
    return(
        <div >
            <Link to={`/WishList`} ><img src={basket} alt="" /></Link>
        </div>
    )
}

export default Basket; 