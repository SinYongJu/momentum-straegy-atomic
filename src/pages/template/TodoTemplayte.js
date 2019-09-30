import React from 'react'
import './TodoTemplayte.scss'


const TodoPage = ({backGround,isInitialMemeber,pagesTitle,todoTimer,todoKarma,todoGreeting,todoWeather,todoList,todoSearch}) => {
  
  let isWire = false
  const WireFrame = ({style}) =>{
    return <div className="wire"></div>
  }
  
  const [ isOnload, setIsOnLoad] = React.useState(false)
    
  React.useEffect(()=>{
    window.addEventListener('load',(e)=>{
      console.log(e)
      setIsOnLoad(true)
    })
  },[])
  
  return (
    <div className={`inner_wrap ${isOnload ? 'on' : ''}`}  style={{...backGround}}>
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
      <div className="content content-upside-right">
       {isWire  ? 
        <WireFrame></WireFrame>
        :
        <>
       {todoWeather}
        </>
       } 
       </div>
      <div className="content content-under-right">
        {todoList}
      </div> 
      <div className="content content-upside-left">
      {isWire  ? 
       <WireFrame></WireFrame>
       :
       <>
      {todoSearch}
       </>
      } 
      </div>
      </> 
      }
      {/* <div>Todo Search</div>*/}
    </div>
  )
}

export default TodoPage
