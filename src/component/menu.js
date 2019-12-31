import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/calculator'>Calculator</Link></li>
                    <li><Link to='/result'>Result</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                </ul>
            </div>
        )
    }
}
