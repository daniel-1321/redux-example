import {combineReducers} from 'redux';
import {calculatorReducers} from './calculator'
import {productReducers} from './product'
import {cartReducers} from './cart'

export const rootReducer = combineReducers({
    calc: calculatorReducers,
    products:productReducers,
    carts:cartReducers
})