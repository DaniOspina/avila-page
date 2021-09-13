import React from 'react';
import {Link} from 'react-router-dom'; 
import './NavBar.css';
import { connect } from 'react-redux';

const NavBar = ({cart}) => {
    return (
        <nav className="navbar">
            <ul className="items">
                <li className="nav-item"><Link to="./BebidasCalientes">Bebidas calientes</Link>
                </li>
                <li className="nav-item"><Link to="./BebidasFrias">Bebidas frías</Link>
                </li>
                <li className="nav-item"><Link to="./Empanadas">Empanadas</Link>
                </li>
                <li className="nav-item"><Link to="./Merengadas">Merengadas</Link>
                </li>
                <li className="nav-item"><Link to="./Pasteles">Pasteles</Link>
                </li>
                <li className="nav-item"><Link to="./Tequeños">Tequeños</Link>
                </li>
            </ul>
        </nav>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.shop.products,
    };
};

export default connect(mapStateToProps)(NavBar);
