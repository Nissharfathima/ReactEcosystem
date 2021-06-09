import React,{useEffect} from 'react';
import NewTodoForm from './NewTodoForm.js';
import {connect} from 'react-redux';
import {removeTodoRequest,markTodoAsCompletedRequest} from '../thunks.js';
import TodoListItem from './TodoListItem.js';
import {loadTodos} from '../thunks.js';
import { getTodosLoading, getcompletedTodos, getIncompleteTodos} from './selectors.js';
import styled from 'styled-components';

const ListWrapper = styled.div`
max-width: 700px;
margin: auto;
`;

const TodoList = ({completedTodos, inCompleteTodos,onRemovePressed,onCompletedPressed,
    isLoading,startLoadingTodos}) => {
  
        useEffect(() => startLoadingTodos(), [])
    
    const loading = (<div>loading....</div>);
    const content = (
    <ListWrapper>
        <NewTodoForm/>
        <h3>Incompleted Todos</h3>
            {inCompleteTodos.map(todo => 
            (<TodoListItem 
            todo={todo}
            onRemovePressed = {onRemovePressed}
            onCompletedPressed ={onCompletedPressed}
            />))}
            <h3>Completed Todos</h3>
            {completedTodos.map(todo => 
            (<TodoListItem 
            todo={todo}
            onRemovePressed = {onRemovePressed}
            onCompletedPressed ={onCompletedPressed}
            />))}
    </ListWrapper>);
    return  isLoading ? loading : content;
};

const mapStateToProps = state => ({
    completedTodos : getcompletedTodos(state),
    inCompleteTodos : getIncompleteTodos(state),
    isLoading : getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed : id => dispatch(removeTodoRequest(id)),
    onCompletedPressed : id => dispatch(markTodoAsCompletedRequest(id)),
    startLoadingTodos : () => dispatch(loadTodos()),
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);