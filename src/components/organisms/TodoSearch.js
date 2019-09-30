import React from 'react';
import H2 from '../atoms/H2'

// const SEARCH_API_KEY = 'AIzaSyDg0k4oe_JXy3TFjJKtS-MmO2A1p76d2rY'; 구글용 

const TodoSearch = () => {
  const [value , setValue] = React.useState('')

  const onHandleChange = (e) =>{
    setValue(e.currentTarget.value )
  }

  const onHandleKeyup = (e)=>{
    const keyCode = e.keyCode
    if(keyCode === 13){
      console.log('enter key!')  
      if(value.length > 0){
        window.location.href='https://www.google.com/search' + value;
        setValue('')
      }

    }
  }


  return (
    <div className="TodoSearch">
      <H2>im Todo Search</H2>
      <div className="tf_comm">
       <label id="todoUser" className="screen_out">Task field</label>
       <input type="text" id="todoUser" name="name" value={value} placeholder={`ex) keywords...`} onChange={(e)=>onHandleChange(e)} onKeyUp={e=>{onHandleKeyup(e)}} />
     </div>
    </div>
  );
};

export default TodoSearch;