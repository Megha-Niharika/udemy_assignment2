import React from 'react';
import Validation from "./Validationcomponent/Validation"
import './App.css';
import Char from "./Char/Char"

class App extends React.Component{
  
  state= {
   userInput: ""
  }

  inputHandler = (event) => {
  this.setState({userInput:event.target.value})
  }
    

deleteChar =(index) =>
{
const text= this.state.userInput.split('')
text.splice(index, 1)
const updated =text.join('')
this.setState({userInput:updated})
}


    render(){

      const charList = this.state.userInput.split("").map((ch, index) =>
      {
        return <Char 
        character={ch} 
        key={index}
       clicked={() => this.deleteChar(index)} />
      });


    return (
      <div>
      <hr/>
  <input
   type="text" 
  onChange={this.inputHandler} 
   value={this.state.userInput}/>
<p> {this.state.userInput}</p>
<Validation inputLength={this.state.userInput.length}/>
{charList}
  </div>
    )
  }
}

  export default App;
  