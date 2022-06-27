import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Task = styled.h2`
    font-weight: 300;
    font-size: 1.3rem;
    color: ${props => props.complete && '#e07a5f'};
    text-decoration-line: ${props => props.complete && 'line-through'};
`
const CheckBox = styled.input`
    width: 20px;
    height: 20px;
`

const Todo = ({todo, dispatch}) => {

  return (
    <Container>
        <Task complete={todo.complete}>{todo.task}</Task>
        <CheckBox onChange={() => dispatch({type: 'complete', id: todo.id})} checked={todo.complete} type='checkbox' />
    </Container>
  )
}

export default Todo