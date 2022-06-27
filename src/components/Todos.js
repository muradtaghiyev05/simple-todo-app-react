import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import Todo from './Todo'

const Container = styled.div`
    background-color: #f4f1de;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 20px 20px;
`
const Title = styled.h1`
    font-weight: 500;
    padding: 20px 0;
`
const TodosContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    width: 80%;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const AddTask = styled.input`
    text-align: center;
    margin: 20px 0 60px 0;
    border: none;
    outline: none;
    background-color: #f4f1de;
    padding: 15px 20px;
    font-size: 1.2rem;
    width: 100%;
`
const Button = styled.button`
    border: none;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
    background-color: #3d405b;
    position: absolute;
    bottom: -40px;
    cursor: pointer;
`

const initialTodos = [
    {
        id: 1,
        task: 'Cook Dinner',
        complete: false
    },
    {
        id: 2, 
        task: 'Go Gym',
        complete: false
    }
]

function todoReducer(todos, action) {
    switch (action.type) {
        case 'add':
            return [...todos, { id: Date.now(), task: action.task, complete: false }];
        
        case 'complete':
            return todos.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        
        default:
            return todos;
    }
}

const Todos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (title !== '') {
            dispatch({ type: 'add', task: title });
            setTitle('');   
        }
    }

  return (
    <Container>
        <Title>To Do List</Title>
        <TodosContainer>
            {todos.map(todo => (
                <Todo dispatch={dispatch} key={todo.id} todo={todo} />
            ))}
        </TodosContainer>
        <Form onSubmit={handleSubmit}>
            <AddTask onChange={e => setTitle(e.target.value)} value={title} placeholder='Add task...' />
            <Button type='submit'>+</Button>
        </Form>
    </Container>
  )
}

export default Todos