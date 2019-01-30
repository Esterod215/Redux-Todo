import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodoList extends React.Component{
 render(){
     
    return(
         <div>
           {this.props.todos.map(todo =>{
               return(
                   <Todo todo={todo} key={todo.id}/>
               )
           })}  
         </div>
     )
 } 

}
const mapStateToProps =state =>{
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(TodoList)