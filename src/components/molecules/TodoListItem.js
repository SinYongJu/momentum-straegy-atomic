import React,{useState} from 'react';
import Desc from '../atoms/Desc';
import './TodoListItem.scss'


const TodoListItem = ({children,idIndex,onChange,onClick}) => {
  const [modify,setModify] = useState(false);
  const [value,setValue] = useState(children);

  const onClickHandler = (e,listIndex) => {
    if(modify){
      onClick(value,listIndex)
    }
    setModify(!modify)
  }

  return (
    <li className={`TodoListItem ${modify ? 'modify':''}`}> 
    <div className="wrpa_item">
    {modify ? 
      <> 
      <label htmlFor={"checkbox0"+idIndex}>{"checkbox0"+idIndex}</label>
      <input id={"checkbox0"+idIndex} value={value} onChange={e=>{setValue(e.currentTarget.value)}} name="checkItemList"></input>
      <button className="btn_modify" onClick={ e => onClickHandler(e,idIndex)}>modify complete</button>
      </>
      :
      <> 
        <input type="checkbox" id={"checkbox0"+idIndex} name="checkItemList" className="inp_check" onChange={ (e,idIndex)=>onChange(e,idIndex)}/>  
        <label htmlFor={"checkbox0"+idIndex}>{"checkbox0"+idIndex}</label>
        <Desc>{children}</Desc>
        <button className="btn_modify" onClick={ e => onClickHandler(e)}>modify</button>
      </>
      }
      </div>
    </li>
    
    
  )
};

export default TodoListItem;