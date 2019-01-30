import { ADD_TODO, TOGGLE } from '../actions';

const initialState = {
    
    todos: [
        {

            value: 'Walk the dog.',
            id: 1,
            completed: false
        },
        {
            value: 'Clean',
            id: 2,
            completed: false

        }
        
    ]
    
};


function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                
                todos: [...state.todos, action.payload]

            }
            case TOGGLE:
            return{
                
               todos: state.todos.map(todo =>{
                   if(todo.id === action.payload.id) {
                       return{...todo,completed:!todo.completed}
  
                   }else{
                       return todo
                   } 
               })
            }
        default:
            return state
    }
}

export default reducer;