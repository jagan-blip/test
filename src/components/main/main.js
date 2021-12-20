import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getweather } from "./mainSlice";
import styles from './main.css'

export function Main(){
    const [cityin,setCity] = useState("");
    const obj = {
        city : cityin
    }
    
    const weather = useSelector((state) => state.weather.weather);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getweather(obj));
    },[dispatch])
    
    const handlecclick = () => {
        dispatch(getweather(obj))
    }
    return(
        <div>
            
        <div className ="container">

        <div id= "cityin">
              
        <input type="text" id="city"  placeholder="please enter city name" onChange = {(e) => setCity(e.target.value) }></input> <i class="fa fa-search"  aria-hidden="true" onClick={(e) => handlecclick()}></i><br/>
        </div>
        <div className = "card">
            <h1>{weather.length ==0 || weather.error != null ? "city not found" : weather.location.name }</h1>
            <div className ="cont">
            <div className="lcont">
                <p>details</p>
                <p> {weather.length ==0 || weather.error!=null ? "N/A" : weather.location.country}</p>
                <p>{weather.length ==0 || weather.error!=null ? "N/A" :  `Latitude: ${weather.location.lat}`}</p>
                <p>{weather.length ==0 || weather.error!=null ? "N/A" : `Longitude: ${weather.location.lon}`}</p>
                

            </div>
            <div className="rcont">
                <p>{weather.length ==0 || weather.error!=null ? "N/A" : weather.current.condition.text}</p>
                <p> {weather.length ==0 || weather.error!=null ? "N/A" : `${weather.current.temp_c}°C `}</p>
                <img src = {weather.length ==0 || weather.error!=null ? " " :` http://${weather.current.condition.icon}` }/> 
                <p>{weather.length ==0 || weather.error!=null ? "N/A" : `${weather.current.wind_kph} kph`}</p>

            </div>
            </div>
            
            

        </div>
        
            

            
               
                
             
               
              
               
        </div>
      
      
               
        </div>
        
    )
}