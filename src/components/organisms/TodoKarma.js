import React,{useState,useEffect} from 'react';
import Desc from '../atoms/Desc';


const TodoKarma = () => {
  const [karmaList, setKarmaList] = useState([])
  const [karma, setKarma] = useState([])
  
  const getKarma = async () => {    
    fetch('/data/karma.json').then((res)=>res.json()).then((data)=>{ 
      setKarmaList(data.data)
        console.log('getKarma')
      }
    ).catch(e=>console.log(e))
   
  }

  useEffect(  ()=>{   
      getKarma()
  },[])

  useEffect( ()=>{
    setKarma(randomKarama(karma))
    
  },[karmaList] )

  
  const randomKarama = () => {
    const length = karmaList.length;
    const index = Math.floor(Math.random(length)*10)
    return karmaList[index]
  }

  
  return (
    <div className="TodoKarma">
      <h2>im' TodoKarma</h2>
      <Desc>{karma&&karma.content}</Desc>
    </div>
  );
};

export default TodoKarma;