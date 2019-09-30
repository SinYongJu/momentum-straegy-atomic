import React,{useState,useContext,useEffect} from 'react';
import {UserContext} from '../../context/UserContext'
import H2 from '../atoms/H2'

const API_KEY = '20f9ff9f49a27e141ddd412abd830a11';


const TodoWeather = () => {

    const {getGeolocations} = useContext(UserContext)
    const [weather,setWeather] = useState({})


    const getWeather = () => {   
        const {latitude,longitude} = getGeolocations()
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`).then((res)=> res.json()).then((data)=>{ 
            const {temp_max,temp_min} = data.main
            const {main} = data.weather[0] 
            setWeather({
                temp_max,
                temp_min,
                main
            })
          }
        ).catch(e=>console.log(e))

      }
    
    useEffect(()=>{   
        getWeather()
    },[])
    

   
    return (
        <div className="TodoWeather">
           <H2>im' TodoWeather</H2>
           <p>최고 기온 : {weather.temp_max}</p>
           <p>최저 기온 : {weather.temp_min}</p>
           <p>날씨 : {weather.main}</p>
        </div>
    );
};

export default TodoWeather;