import './Card';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/Shopping/shopping-action'

const Card = ({product, addToCart}) => {

    return (
            <section className="main-content">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="food-card">
                                    <div className="img">
                                        <img src="https://i.imgur.com/eFWRUuR.jpg" alt="{name}"/>
                                    </div>
                                    <div className="content">
                                        <div className="title-section">
                                            <a href="#!" className="title">{product.name}</a>
                                            <a href="#!" className="author">{product.category}</a>
                                        </div>
                                        <div className="bottom-section">
                                            <hr/>
                                            <div className="space-between">
                                                <div className="price">
                                                <span>{product.price} COP</span>
                                            </div>
                                            <div className="order-count">
                                                {/* <button>-</button> */}
                                                <button onClick ={() => addToCart(product.id)}>+</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </section>
    )
};

const mapDispachToProps = (dispach) => {
    return{
    addToCart: (id) => dispach(addToCart(id)),
    };
};

export default connect(null, mapDispachToProps) (Card);