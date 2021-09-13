import React from 'react'
import Card from '../Components/card/Card';
import {products} from '../data/menuAvila';

const Empanadas = () => {

    const data = products.filter(item => item.category === "Empanadas")
    return (
        <>
            <h4>EMPANADAS</h4>
            <hr/>
            {data.map((element, index) =>
            <Card product={element} key={index}/>
            )}
        </>
    )
}

export default Empanadas
