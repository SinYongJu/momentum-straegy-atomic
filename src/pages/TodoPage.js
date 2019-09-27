import React from 'react';
import TodoTemplayte from './template/TodoTemplayte'

import TodoGreeting from '../components/organisms/TodoGreeting'
import TodoTimer from '../components/organisms/TodoTimer'
import TodoKarma from '../components/organisms/TodoKarma'

const TodoPage = () => {
  const isInitialMemeber = true
  return (
    <TodoTemplayte
      isInitialMemeber={isInitialMemeber}
      pagesTitle = {<h1>Momentum todos</h1>}
      todoTimer = {<TodoTimer/>}
      todoKarma = {<TodoKarma/>}
      todoGreeting = {<TodoGreeting></TodoGreeting>}
    >
    </TodoTemplayte>
  );
};

export default TodoPage;