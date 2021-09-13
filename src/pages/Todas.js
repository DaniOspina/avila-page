import React from 'react';
import Card from '../Components/card/Card';
import {connect} from 'react-redux';

const Todas = ({products}) => {

    return (
        <>
            <h4>TODOS</h4>
            <hr/>
            <div className="row">
                {products.map((product) => (
                    <Card key={product.id} product={product}></Card>
                ))}
                
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(Todas);

