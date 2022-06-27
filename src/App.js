import React from 'react'
import styled from 'styled-components'
import Todos from './components/Todos'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right bottom, #e07a5f, #f2cc8f);
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const DateContainer = styled.div`
  padding: 25px 0;
  background-color: #81b29a;
  width: 100%;
  text-align: center;
  border-radius: 20px 20px 0 0;
`

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
`

function App() {

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();

  return (
    <Container>
      <Wrapper>
        <DateContainer>
          <Title>{today.toLocaleDateString('en-US', options)}</Title>
        </DateContainer>
        <Todos />
      </Wrapper>
    </Container>
  );
}

export default App;
