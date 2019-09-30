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

/**
 * 
 * @param {Object: Object}} items 
 * key, items Object(ex) obj, arr)
 */
export const setItems = (items)=>{
  
  const keys = Object.keys(items)
  console.log(keys)
  keys.forEach(key => {
    localStorage.setItem(key, JSON.stringify(items[key]))
  })
}

export const setItem = (targetObj)=>{
  const key = Object.keys(targetObj)
  return localStorage.setItem(key, targetObj[key])
}

export const getItem = (target)=>{
  return localStorage.getItem(target)
}

export const getItems = (target) => {
  const targetData = JSON.parse(localStorage.getItem(target))
  return targetData
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

