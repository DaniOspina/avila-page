import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import Header from '../Header/Header';
import NavBar from '../Navbar/NavBar';
import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, history }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const product = () => {
    let text = []
    cart.forEach(pro => text.push([pro.name, pro.qty]))
    console.log(text)
    return text
  }
  /* const handleSend = ()=>{
      history.push('/Send');
  } */

  return (
      <>
      <Header/>
      <NavBar/>
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <a href = {`https://api.whatsapp.com/send?phone=${3058514694}&text=
        Hola, gracias por comprar en Avila Crepe's! Resumen de tu compra: ${product()} Cantidad de productos:${totalItems} Precio total:${totalPrice}`}>
         <button className={styles.summary__checkoutBtn}>
                 {/* onClick={handleSend}>  */}
          Confirmar orden
        </button>
        </a>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

