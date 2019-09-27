import React from 'react'
import './TodoTemplayte.scss'


const TodoPage = ({isInitialMemeber,pagesTitle,todoTimer,todoKarma,todoGreeting}) => {

  return (
    <>
      {pagesTitle}
      {
       isInitialMemeber ? todoTimer : todoGreeting
      }
      
      {/* <div>Todo Karma</div>
      <div>Todo Search</div>
      <div>Todo Weather</div> */}
    </>
  )
}

export default TodoPage
