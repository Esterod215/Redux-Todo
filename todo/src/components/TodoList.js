import React from 'react';
import {Connect} from 'react-rdux';

const TodoList = props => {
    return {
        o
    };
}

const mapStateToProps = state => ({
    todos: state.todos
})


export default Connect(mapStateToProps, {})(TodoList)