import React from 'react'
import './TodoTemplayte.scss'


const TodoPage = ({isInitialMemeber,pagesTitle,todoTimer,todoKarma,todoGreeting,todoWeather}) => {
  
  let isWire = false
  const WireFrame = () =>{
    return <div className="wire"></div>
  }
  return (
    <>
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
       
      {/* <div>Todo Search</div>*/}
    </>
  )
}

export default TodoPage
