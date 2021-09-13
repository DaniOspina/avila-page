import React from 'react'
import Card from '../Components/card/Card';
import {connect} from 'react-redux';

const BebidasCalientes = ({products}) => {

    const data = products.filter(item => item.category === "Bebidas calientes")

    return (
        <>
            <h4>BEBIDAS CALIENTES</h4>
            <hr/>
            {data.map((element, index) =>
            <Card product={element} key={index}/>
            )}
        </>
    )
};


const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(BebidasCalientes);
