import React from 'react';
import { connect } from 'react-redux';
import {Button, InputGroup} from 'react-bootstrap';
import { xoa } from '../actions/cart';

class CartList extends React.Component {
    onXoa = (product) => {
        this.props.xoa(product)
    }
  render() {
    const {isEmpty, cartItems} = this.props
    return (
      <div className='App'>
          {!isEmpty?cartItems.map((product, index) => {
              return (
                <InputGroup key={index}  className='mb-3'>
                    <InputGroup.Prepend>
                        <InputGroup.Text className='product-title'>{product.productName}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <InputGroup.Append>
                        <InputGroup.Text>
                            <Button variant='danger' onClick={() => this.onXoa(product)}>X</Button>
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
             )
            }):''}      
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isEmpty: state.carts.isEmpty,
        cartItems: state.carts.productItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        xoa: (product) => {
            dispatch(xoa(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CartList);