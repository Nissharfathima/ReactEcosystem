import React from 'react';
import NewTodoForm from './NewTodoForm.js';
import TodoListItem from './TodoListItem.js';
import './TodoList.css';

const TodoList = ({todos = [ {text:"Hello"}]}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
            {todos.map(todo => (<TodoListItem todo={todo}/>))}
    </div>

);

export default TodoList;