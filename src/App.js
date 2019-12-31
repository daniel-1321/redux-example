import React, { Component } from 'react';
import './App.css';
import Calculator from './component/calculator';
import Result from './component/result';
import {Container} from 'react-bootstrap';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Container>
          <Result/>
          <Calculator></Calculator>
        </Container>
      </div>
    );
  }
}

export default App;
