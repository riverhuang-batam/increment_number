import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components'
class App extends Component{

  state= {counter: 1};
  
  increment = () => {
    this.setState({ counter: this.state.counter + 1})
  }
  decrement = () => {
    this.setState({counter: this.state.counter - 1})
    if( this.state.counter <= 1){
      this.setState({counter : this.state.counter})
      window.alert("oi dah kelebihan bangsat")
    }
  }
  reset = () =>{
    this.setState({counter: 0})
  }
  render(){
    return( 
    <div className="App">
      <img src={logo} alt={logo} className="App-logo" />
      <div>
      <Button primary onClick={this.increment}>+</Button>
      <input value={this.state.counter}/>
      
      <Button primary onClick={this.decrement}>-</Button>
      </div>

      <Button primary onClick={this.reset}>Reset</Button>
      </div>
      
    )
  }
}
const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0.5em 1em;
padding: 0.25em 1em;

${props => props.primary && css`
background: palevioletred;
color: white;
font-size: 30px;
`}
`;

export default App;
