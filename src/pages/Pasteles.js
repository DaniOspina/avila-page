import React from 'react'
import Card from '../Components/card/Card';
import {products} from '../data/menuAvila';

const Pasteles = () => {
    const data = products.filter(item => item.category === "Pasteles")

    return (
        <>
            <h4>PASTELES</h4>
            <hr/>
            {data.map((element, index) =>
            <Card product={element} key={index}/>
            )}
        </>
    )
}

export default Pasteles
