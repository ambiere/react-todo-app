import React from 'react'
import './App.css'
import TodoList from './TodoList';
import { GetTodosReducer } from './TodoReducer'
import { createTodosCtx } from './TodoContext'

function App() {
  const [ , TodosCtxProvider, ] = createTodosCtx()
  const [state, dispatch] = GetTodosReducer()

  return (
    <>
      <TodosCtxProvider value={{ state, dispatch }}>
        <TodoList />
      </TodosCtxProvider>
    </>
  )
}

export default App
