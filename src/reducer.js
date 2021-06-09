import {CREATE_TODO, MARK_TODO_AS_COMPLETED, REMOVE_TODO,LOAD_TODOS_IN_PROGRESS,
LOAD_TODOS_FAILURE,LOAD_TODOS_SUCCESS} from './action.js';

export const isLoading = (state = false,action) => {
    const {type} = action;
    switch(type){
        case LOAD_TODOS_IN_PROGRESS :
            return true;
        case LOAD_TODOS_SUCCESS :
        case LOAD_TODOS_FAILURE:
            return false;
        default : 
        return state;
    }
}

export const todos = (state = [],action) => {
    const {type, payload} = action;

    switch(type) {
        case CREATE_TODO : {
            const {todo} = payload;
            // const newTodo = {
            //     text,
            //     isCompleted : false,
            // };
            return state.concat(todo);
        }
        case REMOVE_TODO : {
            const {todo : removedTodo} =payload;
            return state.filter(todo => todo.id !== removedTodo.id );
        };
        case MARK_TODO_AS_COMPLETED : {
            const {todo : updatedTodo} = payload;
            return state.map(todo =>{
                if(todo.id === updatedTodo.id){
                    return updatedTodo;
                }
                return todo;
            })
        }
        case LOAD_TODOS_SUCCESS : {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default:
            return state;
    }
}
