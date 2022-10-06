import React from 'react'
import './App.css'
import TodoList from './TodoList';
import { GetTodosReducer } from './TodoReducer'
import { createTodosCtx } from './TodoContext'
// import GitHub from './GitHub'
// import UserForm from './UserForm'

function App() {
  const [ , TodosCtxProvider, ] = createTodosCtx()
  const [state, dispatch] = GetTodosReducer()

  return (
    <>
      <TodosCtxProvider value={{ state, dispatch }}>
        <TodoList />
      </TodosCtxProvider>
      {/* <UserForm /> */}
      {/* <GitHub /> */}
    </>
  )
}

export default App