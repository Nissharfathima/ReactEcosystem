import React from 'react';
import NewTodoForm from './NewTodoForm.js';
import {connect} from 'react-redux';
import {removeTodo, markTodoAsCompleted} from '../action.js';
import TodoListItem from './TodoListItem.js';
import './TodoList.css';

const TodoList = ({todos = [],onRemovePressed,onCompletedPressed}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
            {todos.map(todo => 
            (<TodoListItem 
            todo={todo}
            onRemovePressed = {onRemovePressed}
            onCompletedPressed ={onCompletedPressed}
            />))}
    </div>

);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed : text => dispatch(removeTodo(text)),
    onCompletedPressed : text => dispatch(markTodoAsCompleted(text)),
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);