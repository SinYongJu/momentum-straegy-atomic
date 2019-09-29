import React,{useState,useContext,useEffect} from 'react';
import {UserContext} from '../../context/UserContext'
import { get } from 'http';

const API_KEY = '20f9ff9f49a27e141ddd412abd830a11';


const TodoWeather = () => {

    const {getGeolocations} = useContext(UserContext)
    const [weather,setWeather] = useState({})


    const getWeather = () => {   
        const {latitude,longitude} = getGeolocations()
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`).then((res)=> res.json()).then((data)=>{ 
            const {temp_max,temp_min} = data.main
            console.log(data)
            const {main} = data.weather[0] 
            setWeather({
                temp_max,
                temp_min,
                main
            })
            console.log('getWeather')
          }
        ).catch(e=>console.log(e))

      }
    
    useEffect(()=>{   
        getWeather()
    },[])
    

   
    return (
        <div>
           <h2>im' TodoWeather</h2>
           <p>최고 기온 : {weather.temp_max}</p>
           <p>최저 기온 : {weather.temp_min}</p>
           <p>날씨 : {weather.main}</p>
        </div>
    );
};

export default TodoWeather;