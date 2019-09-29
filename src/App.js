import React from 'react'
import TodoPage from './pages/TodoPage'
import {UserProvider} from './context/UserContext'


const App = () => {
  return (
    <UserProvider>
      <div id="kakaoWrap">
        <TodoPage />
      </div>
    </UserProvider>
  )
}

export default App
