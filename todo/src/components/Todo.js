import React from 'react'
import { connect } from 'react-redux';

import {toggleTodos} from '../actions';


const Todo = (props) => {
    console.log(props)
    return (
    <div>
      <h1 onClick={()=>props.toggleTodos(props.todo.id)}>{props.todo.value}</h1>
    </div>
  )
}

export default connect(null,{toggleTodos})(Todo)
