import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';


import Insta from '../home/insta/Insta';
import styles from './Catalog.module.scss'
import ClothesMenu from './clothesMenu/ClothesMenu';
import Header from './header/Header';
import Products from './products/Products';

const Catalog = () => {
    return(
        <div className='container'>
            <Nav />
            {/* <ClothesMenu /> */}
            <Header />
            <Products />
            <Insta />
            <Footer />
        </div>
    )
}

export default Catalog;