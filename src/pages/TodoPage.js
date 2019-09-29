import React,{useContext} from 'react';
import TodoTemplayte from './template/TodoTemplayte'
import TodoGreeting from '../components/organisms/TodoGreeting'
import TodoTimer from '../components/organisms/TodoTimer'
import TodoKarma from '../components/organisms/TodoKarma'
import TodoWeather from '../components/organisms/TodoWeather'
import {UserContext} from '../context/UserContext'

const TodoPage = () => {

  const {isInitialMemeber} = useContext(UserContext)

 
  return (
      <TodoTemplayte
        isInitialMemeber={isInitialMemeber}
        pagesTitle = {<h1>Momentum todos</h1>}
        todoTimer = {<TodoTimer/>}
        todoKarma = {<TodoKarma/>}
        todoGreeting = {<TodoGreeting></TodoGreeting>}
        todoWeather = {<TodoWeather/>}
      >
      </TodoTemplayte>
  );
};

export default TodoPage;