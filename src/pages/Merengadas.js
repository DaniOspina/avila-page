import React from 'react'
import Card from '../Components/card/Card';
import {products} from '../data/menuAvila';

const Merengadas = () => {
    const data = products.filter(item => item.category === "Merengadas")

    return (
        <>
            <h4>MERENGADAS</h4>
            <hr/>
            {data.map((element, index) =>
            <Card product={element} key={index}/>
            )}
        </>
    )
}

export default Merengadas
