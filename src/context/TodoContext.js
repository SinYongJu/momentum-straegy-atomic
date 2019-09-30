import React,{useState,createContext} from 'react';
import {setItems,getItems,getItem} from '../utils/localstorage'

const TodoContext = createContext()

const TODOTASK = "TODOTASK"
const TodoProvider = (props) => {

    
  const [list, actionList] = useState([]);

  const getListItemsAtLocal =() => {
    const items = getItems(TODOTASK)
    actionList(items)
     
    return items || []
  }

  React.useEffect(()=>{
    if(getItem[TODOTASK])getListItemsAtLocal()
  },[list])

 
  const getListItems = () => {
    console.log(list)
    return list
  }

  const setListItems = (updateArray) => {
    setItems({
      TODOTASK :[...updateArray]
    })
  }


  return (
    <TodoContext.Provider
      value={{setListItems, getListItemsAtLocal}}
    >{props.children}</TodoContext.Provider>
  );
};

const TodoConsumer = TodoContext.Consumer
export {TodoContext, TodoProvider, TodoConsumer};