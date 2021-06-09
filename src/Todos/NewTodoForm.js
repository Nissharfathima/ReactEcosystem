import React,{useState} from 'react';
import {connect } from 'react-redux';
import { todos } from '../reducer.js';
import {addTodoRequest} from '../thunks.js';
import './NewTodoForm.css';
import {getTodos, getTodosLoading} from './selectors.js';

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return(
    <div className="new-todo-form">
        <input type="text" className="new-todo-input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}/>
        <button 
        onClick={() => {
            const isDuplicate = todos.some(todo => todo.text === inputValue)
            if(!isDuplicate){
            onCreatePressed(inputValue)
            setInputValue('')
            }
        }}
        className="new-todo-button">
            Create Todo
            </button>
    </div>
);
    }

    const mapStateToProps = state => ({
        todos: getTodos(state),
    });

    const mapDispatchToProps = dispatch => ({
        onCreatePressed : text => dispatch(addTodoRequest(text)),
    });

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);