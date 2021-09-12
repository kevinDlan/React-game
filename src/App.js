import React from 'react';
import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       vegeta:100,
       goku:100
    }
  }

  reducelife = (param,param1)=>{
   if(param==="Goku")
   {
      this.setState((prevState)=>{
        return {
          vegeta:prevState.vegeta-param1
        }
      })
   }else{
      this.setState((prevState)=>{
        return {
          goku:prevState.goku-param1
      }
    })
   }
  }
  
  render(){
    return (
      <div className="container text-center">
        <h1>Goku VS Vegeta</h1> 
        <hr/>
        <div className="row">
            <Vegeta name="Vegeta"  vie={this.state.vegeta} reduceHandle={this.reducelife} />
            <Goku name="Goku" vie={this.state.goku} reduceHandle={this.reducelife} />
        </div>
      </div>
    );
  }
}

export default App;
