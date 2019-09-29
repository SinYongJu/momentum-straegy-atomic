import React,{useState,createContext} from 'react';
import {setItems,getItems} from '../utils/localstorage'

const UserContext = createContext()


const UserProvider = ( {children} ) => {
    const [name,setName] = useState(getItems('name'))
    const [email,setEmail] = useState(getItems('email'))

    const [latitude,setLatitude] = useState(0) // 위도
    const [longitude,setLongitude] = useState(0) // 경도

    const saveGeolocations = ()=>{
       navigator.geolocation.getCurrentPosition((data)=>{
           const lat = data.coords.latitude
           const lon = data.coords.longitude
            setLatitude(lat)
            setItems({'latitude':lat})
            setLongitude(lon)
            setItems({'longitude':lon})
        })
    }

    const getGeolocations = ()=>{
        return {latitude : getItems('latitude'),longitude : getItems('longitude')}
     }

     const isInit = () => {
        saveGeolocations()
        return (getItems('name') && getItems('email'))
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
        setItems({name})
        setItems({email})
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