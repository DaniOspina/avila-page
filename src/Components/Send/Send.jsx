import React from 'react';
import './Send.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../Navbar/NavBar';

const Send = () => {
    return (
        <div className="Information">
            <Header/>
            <NavBar/>
            <div className="Information-contend">
                <div className="Information-head">
                <h1>Informacion</h1>
                </div>
            <div className="Information-form">
                <form action="">
                    <input type="text" placeholder="Nombre completo" name="name"/>
                    <input type="text" placeholder="Dirección" name="addres"/>
                    <input type="text" placeholder="Interior - Apartamento - Casa" name="apto"/>
                    <input type="text" placeholder="Telefono" name="phone"/>
                    <input type="text" placeholder="Nombre" name="name"/>
                </form>
            </div>

                <h1>Whatsapp</h1>
                <div className="Information-buttons">
                    <div className="Information-back">
                        Regresar
                    </div>
                    <div className="Information-next">
                        <Link>
                        WP
                        </Link>                       
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido</h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>ITEM Name</h4>
                        <span>$18</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Send
