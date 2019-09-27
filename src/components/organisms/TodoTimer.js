import React,{useState,useEffect} from 'react';
import Strong from '../atoms/Strong';
import Desc from '../atoms/Desc';
import './TodoTimer.scss'



const getH = () => {
  let date = new Date()
  let time = date.getHours() 
  return time > 12 ? (time -12) : time
}
const getM  = () =>{
  let date = new Date()
  let time = date.getMinutes()
  return time < 10 ? '0'+time : time
}
const getS = ()=> {
  let date = new Date()
  let time = date.getSeconds()
  return time < 10 ? '0'+time : time
};

const getCurrentTime = () => {
  return `${getH()} : ${getM()} : ${getS()}`
}


const TodoTimer = () => {

  const [time,actionTime] = useState(getCurrentTime())
  
  useEffect(()=>{  
    timer()
    return clearTimeout(timer)
  },[time])

  const timer = () => setInterval(() => {
    actionTime(getCurrentTime())
  },500)
 
  return (
    <div className="TodoTimer">
      <h2>im' TodoTimer</h2>
      <Strong>{time}</Strong>
      <Desc>hello luka.</Desc>
    </div >
  );
};

export default TodoTimer;