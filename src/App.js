import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import Validation from './validation/validation'
import Char from './char/char'

class App extends Component {
  state={
   
      username:""
    
      
    
  }

  eventhandler = (e)=>{
    this.setState({username:e.target.value})
  }

  deleteChar = (index) =>{
    const text = this.state.username.split('');
    text.splice(index, 1);
   const updatedText = text.join('');
  
    console.log('split',text);
   console.log('splice',updatedText);
   this.setState({username:updatedText})
   
  }
  render() {
      let charLIst = this.state.username.split('').map((che, index) => {
        return <Char charactor = {che} key={index} click={()=>this.deleteChar(index)}/>
      });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <UserInput change={this.eventhandler} value={this.state.username}/>
       <UserOutput username ={this.state.username}/>
       <Validation textL =  {this.state.username.length} />
       {charLIst}
      </div>
    );
  }
}

export default App;
