import React,{useState,useEffect,useContext} from 'react';
import {TodoContext} from '../../context/TodoContext'
import H2 from '../atoms/H2'
import Strong from '../atoms/Strong';
import TodoListItem from '../molecules/TodoListItem'
import './TodoList.scss'

const TodoList = () => {

  const {setListItems,getListItemsAtLocal} = useContext(TodoContext)
  
  const todolistItemFormat = {
    task : ''
  }
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{
    getTodoListItems()
  },[])

  const [checkedList, setCheckedList] = useState([]);
  const [checkedItemList, setCheckedItemList] = useState([]);


  const getTodoListItems = () => {
    setList(getListItemsAtLocal())
  }

  const finallyUpdateTodoListItems = (arr) => {
    setList(arr)
    setListItems(arr)
  }

  // const deleteTodoListItems = (updateArray, index) => {
  //   if(index !== 0 && !index){
  //     const error = new Error('must have index');
  //     throw error
  //   }
  //   if(index < 0 ) index =0
  //   if(index > updateArray.length-1) index = updateArray.length-1
  //   console.log(updateArray.slice(0,index))
  //   console.log(updateArray.slice(index+1))
  //   const arrayFordeletedItem = [...updateArray.slice(0,index), ...updateArray.slice(index+1)]
  //   console.log(arrayFordeletedItem)
  // }

  const deleteTodoListItems = (filterArr) =>{
    let tmp = [...list];   
    const arr = tmp.filter((value, index)=> { 
      return  (filterArr.indexOf(index) === -1)
    })
 
    finallyUpdateTodoListItems(arr)
    setCheckedList([])
            
    checkedItemList.map(item => {
      item.checked = null
    })

  }

  const createTodoListItems = async (value) => {

    console.log(list)
    const obj = {...todolistItemFormat}
    obj.task = value
    const addTaskArr = [...list ,obj ]
    finallyUpdateTodoListItems(addTaskArr)
  }


  const onHandleChange = (e)=>{
    const value = e.currentTarget.value;
    setValue(value)
  }

  const onHandleKeyup = (e)=>{
    const keyCode = e.keyCode
    if(keyCode === 13){
      console.log('enter key!')  
      if(value.length > 0){
        createTodoListItems(value)
        setValue('')
      }

    }
  }
  
  // checkbox 
  const onHandleCheckbox = (e,index)=>{
    const checked = e.currentTarget.checked;
    if(checked){
      const array = [...checkedList]
      array.push(index)
      setCheckedList(array)

      const tmp = [...checkedItemList]
      tmp.push(e.currentTarget)
      setCheckedItemList(tmp)
    }
    
  }
  const onClickDeleteHandler = (e) => {
        deleteTodoListItems(checkedList)
        console.log(checkedItemList)
  }

  const modifyTodoListItems = (value,index)=>{
    console.log(value)
    const tmpList = [...list];
    tmpList[index].task = value
    finallyUpdateTodoListItems(tmpList)
  }

  const onClickModifyHandler = (value,index) => {
    modifyTodoListItems(value,index)
    console.log('modify')
  }

  // list 뿌리기 
  const drawListItems = (listArray) => {
    if(listArray)return listArray.map((item,index) => {
      return <TodoListItem key={index} idIndex={index} onChange={e=>onHandleCheckbox(e,index)}  onClick={onClickModifyHandler} >{item.task}</TodoListItem>
    })
  }

  return (
    <div className="TodoList" >
      <H2>Im, TodoList</H2>
      <Strong>Write your task</Strong>
      <div className="tf_comm">
       <label id="todoUser" className="screen_out">Task field</label>
       <input type="text" id="todoUser" name="name" value={value} placeholder={`ex) todo...`} onChange={(e)=>onHandleChange(e)} onKeyUp={e=>{onHandleKeyup(e)}} />
     </div>
      <button className="btn_delete" onClick={e=>onClickDeleteHandler(e)}>delete</button> selected items.
   
      <ul>{drawListItems(list)}</ul>
    </div>
  );
};

export default TodoList;