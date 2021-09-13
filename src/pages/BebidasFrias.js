import React from 'react';
import Card from '../Components/card/Card';
import {products} from '../data/menuAvila';
const BebidasFrias = () => {

const data = products.filter(item => item.category === "Bebidas frias")

    return (
        <>
            <h4>BEBIDAS FRÍAS</h4>
            <hr/>
            {data.map((element, index) =>
            <Card product={element} key={index}/>
            )}
        </>
    )
}

export default BebidasFrias
