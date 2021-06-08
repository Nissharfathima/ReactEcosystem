import React,{useEffect} from 'react';
import NewTodoForm from './NewTodoForm.js';
import {connect} from 'react-redux';
import {removeTodo, markTodoAsCompleted} from '../action.js';
import TodoListItem from './TodoListItem.js';
import './TodoList.css';
import {loadTodos} from '../thunks.js';

const TodoList = ({todos = [],onRemovePressed,onCompletedPressed,
    isLoading,startLoadingTodos}) => {
  
        useEffect(() => startLoadingTodos(), [])
    
    const loading = (<div>loading....</div>);
    const content = (
    <div className="list-wrapper">
        <NewTodoForm/>
            {todos.map(todo => 
            (<TodoListItem 
            todo={todo}
            onRemovePressed = {onRemovePressed}
            onCompletedPressed ={onCompletedPressed}
            />))}
    </div>);
    return  isLoading ? loading : content;
};

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading : state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed : text => dispatch(removeTodo(text)),
    onCompletedPressed : text => dispatch(markTodoAsCompleted(text)),
    startLoadingTodos : () => dispatch(loadTodos()),
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);