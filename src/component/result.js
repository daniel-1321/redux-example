import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Alert} from 'react-bootstrap';

class Result extends Component {
    
    render() {
        const result = this.props.data
        return (
            <div>
                <Alert variant='danger'>My Result: {result}</Alert>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        data: state.calc
    }
}

export default connect(mapStateToProps)(Result)