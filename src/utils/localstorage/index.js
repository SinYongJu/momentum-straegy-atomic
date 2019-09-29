const localStorage = window.localStorage;

const getOwnPropertises = ()=>{
  const arr = [];
  if(localStorage.length < 1){
    return false
  }
  for(let i = 0; i < localStorage.length; i++){
    arr.push(localStorage.key(i))
  }
  return arr
}

export const setItems = (items)=>{
  const keys = Object.keys(items)
  keys.forEach(key => {
    localStorage.setItem(key, items[key])
  })
}

export const getItems = (targets) => {
  const keys = [targets] 
  const items = keys.map(key => localStorage.getItem(key));
  return items
}

export const getList = () => {
  const arr = getOwnPropertises();
  if(arr.length){
    const list = arr.map((item,index) => {
      let tmp = {}
      tmp[item] = localStorage.getItem(item)
      return tmp
    })
    return list
  }
  return false  
}

export const removeItem = (item) => {
  if(getOwnPropertises){
    localStorage.removeItem(item)
    return true
  }
  return false
  
}

export const clear = () => {
  localStorage.clear();
}

