const initialstate ={
    todos : [],
    filter:"ALL",
    searchTerm:""
}
const todoReducer = (state = initialstate , action) =>{
  switch (action.type){
    case ADD_TODOS:
        return{
            todos : [...state.todos,{text : action.payload.text,completed:false}],
            filter: state.filter,
            searchTerm : state.searchTerm
        }
        case TOGGLE_TODO : 
        return{
                todos : state.todos.map((todo))

            }
  }
}
export default todoReducer ;