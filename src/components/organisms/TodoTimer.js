import React,{useState,useEffect,useContext} from 'react';
import {UserContext} from '../../context/UserContext'
import H2 from '../atoms/H2'
import Strong from '../atoms/Strong';
import Desc from '../atoms/Desc';
import './TodoTimer.scss'


const getH = () => {
  let date = new Date()
  let time = date.getHours() 
  return time > 12 ? ((time -12) < 10 ? '0'+(time -12) : time -12) : (time < 10) ? '0'+time : time
}
const getM  = () =>{
  let date = new Date()
  let time = date.getMinutes()
  return time < 10 ? '0'+time : (time < 10) ? '0'+time : time
}
const getS = ()=> {
  let date = new Date()
  let time = date.getSeconds()
  return time < 10 ? '0'+time : (time < 10) ? '0'+time : time
};

const getCurrentTime = () => {
  return `${getH()} : ${getM()} : ${getS()}`
}

const getTimeGeeting = () =>{
  let date = new Date()
  let time = date.getHours()
    
 
  
  if(time > 6 && time < 12){
    return 'Good Morning~~!!'
  }

  if(time >= 12 && time < 18){
    return 'Good afternoon'
  }

  if(time >= 18  && time < 21){
    return 'Good evening'
  }
   
  if(time >= 21 || time < 6 ){
    return 'Good night'
  }
}

const TodoTimer = () => {
  const {name} = useContext(UserContext); 
  const [time,actionTime] = useState(getCurrentTime())
  const [greeting,actionGreeting] = useState(null)

  useEffect(()=>{  
    timer()
    return ()=> {
      clearTimeout(timer)
    }
  },[time])

  const timer = () => setInterval(() => {
    actionTime(getCurrentTime())
  },500)

  const memo = React.useMemo(()=> {
    actionGreeting(getTimeGeeting())
    return greeting
  },[greeting])

  return (
    <div className="TodoTimer">
      <H2>Current Time</H2>
      <Strong>{time}</Strong>
      <Desc>{memo}, {name}</Desc>
    </div >
  );
};

export default TodoTimer;