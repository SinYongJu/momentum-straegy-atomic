import React,{useContext} from 'react';
import TodoTemplayte from './template/TodoTemplayte'
import TodoGreeting from '../components/organisms/TodoGreeting'
import TodoTimer from '../components/organisms/TodoTimer'
import TodoKarma from '../components/organisms/TodoKarma'
import TodoWeather from '../components/organisms/TodoWeather'
import TodoList from '../components/organisms/TodoList'
import {UserContext} from '../context/UserContext'

const TodoPage = () => {

  const {isInitialMemeber} = useContext(UserContext)
  
  const index = Math.floor(Math.random()*10)+1;
  const backGround = { backgroundImage : `url(/bg_img0${index})`}
 
  return (
      <TodoTemplayte
        backGround = {backGround}
        isInitialMemeber={isInitialMemeber}
        pagesTitle = {<h1>Momentum todos</h1>}
        todoTimer = {<TodoTimer/>}
        todoKarma = {<TodoKarma/>}
        todoGreeting = {<TodoGreeting></TodoGreeting>}
        todoWeather = {<TodoWeather/>}
        todoList = {<TodoList/>}
      >
      </TodoTemplayte>
  );
};

export default TodoPage;