import React,{useState,useEffect} from 'react';
import Desc from '../atoms/Desc';
import H2 from '../atoms/H2'

const TodoKarma = () => {
  const [karmaList, setKarmaList] = useState([])
  const [karma, setKarma] = useState([])
  
  const getKarma = async () => {    
    fetch('/data/karma.json')
          .then((res)=>res.json())
          .then((data)=> setKarmaList(data.data))
          .catch(e=>console.log(e))
   
  }

  useEffect(()=>{   
    getKarma()
  },[])

  const randomKarama = () => {
    const length = karmaList.length;
    const index = Math.floor(Math.random(length)*10)
    return karmaList[index]
  }

  useEffect( ()=>{
    setKarma(randomKarama())
  },[karmaList] )

  
  
  
  return (
    <div className="TodoKarma">
      <H2>im' TodoKarma</H2>
      <Desc>{karma&&karma.content}</Desc>
    </div>
  );
};

export default TodoKarma;