import React from 'react'
import './TodoTemplayte.scss'


const TodoPage = ({backGround,isInitialMemeber,pagesTitle,todoTimer,todoKarma,todoGreeting,todoWeather,todoList}) => {
  
  let isWire = false
  const WireFrame = ({style}) =>{
    return <div className="wire"></div>
  }
 
  return (
    <div className="inner_wrap" style={{  ...backGround}}>
      <div className="header">
        <div className="inner_header">
        {
          isWire  ? 
          <WireFrame></WireFrame>
          :
          <>
          {pagesTitle}
          {isInitialMemeber ? todoTimer : todoGreeting}
          </>
        }
        </div>
      </div>
      {isInitialMemeber&& 
      <>
      <div className="content content-under-center">
      {isWire  ? 
        <WireFrame></WireFrame>
        : 
        <>
        {todoKarma}
        </>
      }
      </div>
      <div className="content content-upside-left">
       {isWire  ? 
        <WireFrame className="content-upside-left"></WireFrame>
        :
        <>
       {todoWeather}
        </>
       } 
       </div>
      <div className="content content-under-right">
        {todoList}
      </div> 
      </> 
      }
      {/* <div>Todo Search</div>*/}
    </div>
  )
}

export default TodoPage
