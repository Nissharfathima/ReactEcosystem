import React,{useState} from 'react';
import {connect } from 'react-redux';
import { todos } from '../reducer.js';
import {addTodoRequest} from '../thunks.js';
import './NewTodoForm.css';

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return(
    <div className="new-todo-form">
        <input type="text" className="new-todo-input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}/>
        <button 
        onClick={() => {
          
            onCreatePressed(inputValue)
            setInputValue('')
            
        }}
        className="new-todo-button">
            Create Todo
            </button>
    </div>
);
    }

    const mapStateToProps = state => ({
        todos: state.todos,
    });

    const mapDispatchToProps = dispatch => ({
        onCreatePressed : text => dispatch(addTodoRequest(text)),
    });

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);