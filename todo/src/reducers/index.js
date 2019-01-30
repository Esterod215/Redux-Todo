

const initialState = {
    todos:[
        {
        
        value: 'Walk the dog.',
        id:1,
        completed: false
        }
    ]
  };


function reducer(state=initialState, action){
   switch(action.type){
       default:
       return state
   }
}

export default reducer;