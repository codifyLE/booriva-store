import { Link } from "react-router-dom";

import fave from './../../../assets/img/svg/fave.svg'

const Favourites = () => {
    return(
        <div>
              <Link to={`/WishList`} ><img src={fave} alt="" /></Link>
        </div>
    )
}

export default Favourites;