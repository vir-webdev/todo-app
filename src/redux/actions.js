import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, REMOVE_TODO, UPDATA_SERACH_TERM } from "./actiontTypes";
import { TOGGLE_TODO } from "./actiontTypes";

export const addtodo = (text) => ({
    type : ADD_TODO,
    payload : {text}
});
export const toggleTodo = (id) =>({
    type : TOGGLE_TODO ,
    payload : {id}
});
export const removeTodo = (id) =>({
 type : REMOVE_TODO ,
 payload : {id}
})
export const markComplete = (id) => ({
    type : MARK_COMPLETED ,
    payload : {id}
})
export const markInComplete = (id) => ({
    type : MARK_INCOMPLETE ,
    payload : {id}
})

export const filterTodos = (filter) => ({
    type : FILTER_TODOS ,
    payload : {filter}
})

export const markAllcompleted = () => ({
    type : MARK_ALL_COMPLETE 
})

export const updateSerchTerm = (searchTerm) => ({
    type : UPDATA_SERACH_TERM ,
    payload : {searchTerm}
})