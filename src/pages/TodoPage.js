import React,{useContext} from 'react';
import TodoTemplayte from './template/TodoTemplayte'
import TodoGreeting from '../components/organisms/TodoGreeting'
import TodoTimer from '../components/organisms/TodoTimer'
import TodoKarma from '../components/organisms/TodoKarma'
import TodoWeather from '../components/organisms/TodoWeather'
import TodoList from '../components/organisms/TodoList'
import TodoSearch from '../components/organisms/TodoSearch'
import {UserContext} from '../context/UserContext'

const TodoPage = () => {

  const {isInitialMemeber} = useContext(UserContext)
  const [index , setIndex ] = React.useState(Math.floor(Math.random()*5)+1)
  const [backGround , setbackGround] = React.useState( { backgroundImage : `url(/images/bg_todo0${index}.jpg)`}) 
  return (
      <TodoTemplayte
        backGround = {backGround}
        isInitialMemeber={isInitialMemeber}
        pagesTitle = {<h1>Momentum</h1>}
        todoTimer = {<TodoTimer/>}
        todoKarma = {<TodoKarma/>}
        todoGreeting = {<TodoGreeting></TodoGreeting>}
        todoWeather = {<TodoWeather/>}
        todoList = {<TodoList/>}
        todoSearch = {<TodoSearch/>}
      >
      </TodoTemplayte>
  );
};

export default TodoPage;