import React,{useState,useContext} from 'react';
import {UserContext} from '../../context/UserContext'
import './TodoGreeting.scss'

const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const TodoGreeting = (props) => {
  const  {saveToUserInfo,onHandleIsInitialMemeberTrue} = useContext(UserContext);

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [isSubmit,setIsSumbit] = useState(false)

// error
  const [isEror, setIsEror] = useState(false)
  const [errorDesc, setErrorDesc] = useState('')

 /**
   * 
   * @param {String} text
   */
  const tfErrorHandler = (text)=>{
    setIsEror(true)
    setErrorDesc(text)
  }

  const onHandleChange =(e) =>{
    const target = e.currentTarget;
    
    if(target.name === "name"){
        setName(target.value)
    }

    if(target.name === "email"){
        setEmail(target.value)
    }
  }
  const onHandleKeyup=(e) => {
    const target = e.currentTarget;
    
    if(e.keyCode === 13){  
      if(target.name === 'name'){
        if(name.length > 4){
          setIsEror(false)
          setIsSumbit(!isSubmit)
        }else{
          tfErrorHandler('at least 4 character')
        }
      }else if(email){
        console.log(emailReg.test(email))
        if(emailReg.test(email)){
          setIsEror(false)
          saveToUserInfo(name,email)
          onHandleIsInitialMemeberTrue()
        }else{
          tfErrorHandler('ex abc@abcd.com')
        }
      }
    }
  }
 
  return (
    <div className="TodoGreeting">
      <h2>Who are you?</h2>
       {//  isMemberInYourServiece ? 
       !isSubmit && 
      <div className="tf_comm">
       <label id="todoUser" >What is your name?</label>
       <input type="text" id="todoUser" name="name" value={name} placeholder={`ex) your NAME`} onChange={(e)=>onHandleChange(e)} onKeyUp={e=>{onHandleKeyup(e)}} />
     </div>
       }
     {//  isMemberInYourServiece ? 
     
      isSubmit && 
      <div className="tf_comm">
        <label id="todoUserEmail">What is your Email?</label>
        <input type="text" id="todoUserEmail" name="email" value={email} placeholder={`ex) email@emaill.com`} onChange={(e)=>onHandleChange(e)} onKeyUp={e =>{onHandleKeyup(e)}} />
      </div>       
      }
      {isEror&&<p>{errorDesc}</p>}
    </div>

  );
};

export default TodoGreeting;