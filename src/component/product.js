import React, { Component } from 'react'
import { connect } from 'react-redux';
import {ListGroup, Card, Button, Badge} from 'react-bootstrap';
import { fetchProduct } from '../actions/product';
import { mua } from '../actions/cart';
import {productList} from '../data/products';
import {Link} from 'react-router-dom';

class product extends Component {
    componentDidMount(){
        this.props.fetchProduct(productList)
    }

    onAddToCart = (product) => {
        this.props.addToCart(product)
    }
    render() {
        const {fetched, items}  = this.props;
        console.log('Cart: ', this.props.isEmpty);
        
        return (
            <div>
                <Link to= '/cart'>
                    <Button variant="warning">Profile <Badge variant="light">{this.props.cartItems.length}</Badge>
                    </Button>
                </Link>
                <ListGroup horizontal>
                    {fetched?items.map((product, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{product.productName}</Card.Title>
                                    <Card.Text>{product.productPrice}</Card.Text>
                                    <Button variant="primary" onClick={() => this.onAddToCart(product)}>Add to card</Button>
                                </Card.Body>
                            </Card>
                            //<ListGroup.Item key={index}>{product.productName}</ListGroup.Item>
                        );
                    }):''}
                    
                </ListGroup>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        items: state.products.productItem,
        fetched: state.products.fetched,
        isEmpty: state.carts.isEmpty,
        cartItems: state.carts.productItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (data) => {
            dispatch(fetchProduct(data));
        },
        addToCart: (product) => {
            dispatch(mua(product))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(product)