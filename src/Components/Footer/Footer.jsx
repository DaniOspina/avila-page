import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import  './Footer.css'
import { connect } from 'react-redux';

const Footer = ({cart}) => {

    const [cartCount, setCartCount] = useState (0);
    
    useEffect(() => {
        let count = 0;
        cart.forEach((item) =>{
            count += item.qty;
        });

        setCartCount(count);
    },[cart, cartCount]);

    return (
        <div>
            <div className="footer">
            <Link to="/Cart" className="link">    
                Ver canasta {cartCount}
            </Link>    
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Footer);

