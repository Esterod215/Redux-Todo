import React, { Component } from 'react'

 class TodoForm extends Component {
    state ={
        inputText:''
    }

    handleChanges=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    }
  
    render() {
    return (
      <form>
        <input 
        placeholder="Add New"
        name="inputText"
        value={this.state.inputText}
        onChange={this.handleChanges}
        />
        <button type='submit'>Add New</button>
      </form>
    )
  }
}

export default TodoForm;
