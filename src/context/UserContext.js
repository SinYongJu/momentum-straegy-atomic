import React,{useState,createContext} from 'react';
import {setItem,getItem,clear} from '../utils/localstorage'

const UserContext = createContext()


const UserProvider = ( {children} ) => {
    const [name,setName] = useState(getItem('name'))
    const [email,setEmail] = useState(getItem('email'))

    const [latitude,setLatitude] = useState(0) // 위도
    const [longitude,setLongitude] = useState(0) // 경도

    const saveGeolocations = ()=>{
       navigator.geolocation.getCurrentPosition((data)=>{
           const lat = data.coords.latitude
           const lon = data.coords.longitude
            setLatitude(lat)
            setItem({'latitude':lat})
            setLongitude(lon)
            setItem({'longitude':lon})
        })
    }

    const getGeolocations = ()=>{
        return {latitude : getItem('latitude'),longitude : getItem('longitude')}
     }

     const isInit = () => {
        saveGeolocations()
        if(getItem('name') && getItem('email')){
            return true
        }else{
            clear()
            return false
        }
        
    }
    
    const [isInitialMemeber,setIsInitialMemeber] = useState(isInit())

  
    const onHandleIsInitialMemeberTrue = () =>{
      setIsInitialMemeber(true)
    }

    const setUserName = (value)=>{
    
        setName(value)
    }

    const setUserEmail = (value) =>{
        setEmail(value)
    }

    const getUserInfoName = () => {
        return name
    }

    const getUserInfoEmail = () => {
        return email
    }
    
    const saveToUserInfo = (name,email) =>{
        setUserName(name)
        setUserEmail(email)
        return saveTolocalUserInfo(name,email)
    }
    const saveTolocalUserInfo = (name, email) =>{    
        setItem({name})
        setItem({email})
    }


    return <UserContext.Provider
        value={{
            name,
            email,
            saveToUserInfo,
            isInitialMemeber,
            onHandleIsInitialMemeberTrue,
            saveGeolocations,
            getGeolocations
        }}
        >{children}</UserContext.Provider>
};

const UserConsumer = UserContext.Consumer;
export { UserContext, UserProvider, UserConsumer}