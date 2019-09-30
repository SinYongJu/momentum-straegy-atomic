import React from 'react'
import TodoPage from './pages/TodoPage'
import {UserProvider} from './context/UserContext'
import {TodoProvider} from './context/TodoContext'

const App = () => {
  return (
    <UserProvider>
      <TodoProvider>
      <div id="kakaoWrap">
        <TodoPage />
      </div>
      </TodoProvider>
    </UserProvider>
  )
}

export default App
