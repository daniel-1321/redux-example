import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plus, minus } from '../actions/calculator';
import {Button} from 'react-bootstrap';


class Calculator extends Component {
    onAddClick = () => {
        this.props.add();
    }
    onMinusClick = () => {
        this.props.minus();
    }
    render() {
        return (
            <div>
                <Button onClick={this.onAddClick} variant="outline-success">+</Button>
                <Button onClick={this.onMinusClick} variant="outline-warning">-</Button>
            </div>
        )
    }
}

//Lấy state trong store ra component hiện tại
// const mapStateToProps = state => {
//     return {
//         data: state
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        add: () => {
            dispatch(plus());
        },

        minus:() => {
            dispatch(minus());
        }
    }
}
export default connect(null, mapDispatchToProps)(Calculator)
