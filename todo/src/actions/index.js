export const ADD_TODO = 'ADD_TODO';
export const TOGGLE = 'TOGGLE';

export function addTodo (value){
    return{
        type: ADD_TODO,
        payload: {
            value: value,
            id: Date.now(),
            completed: false
        }

    }
}

export function toggleTodos (id){
    return{
        type:TOGGLE,
        payload: {
            id:id
        }
    }
}