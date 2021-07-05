import React, { Component } from 'react'
import { addTodo } from '../actions';
import { connect } from 'react-redux';

 class TodoForm extends Component {
    state ={
        inputText:''
    }

    handleChanges=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    }
    addTodo=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.inputText);
        this.setState({
            inputText:''
        })
    }
    render() {
        console.log('hello',this.addTodo)
    return (
      <form onSubmit={this.addTodo}>
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

export default connect(null,{addTodo})(TodoForm);
