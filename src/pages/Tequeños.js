import React from 'react'
import Card from '../Components/card/Card';
import {products} from '../data/menuAvila';

const Tequeños = () => {
    const data = products.filter(item => item.category === "Tequeños")

    return (
        <>
            <h4>TEQUEÑOS</h4>
            <hr/>
            {data.map((element, index) =>
            <Card product={element} key={index}/>
            )}
        </>
    )
}

export default Tequeños
