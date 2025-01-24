import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp()
{
    const[weatherInfo, setWeatherInfo]=useState({
            city:"Delhi",
            feelsLike: 23.5,
            temp: 24.84,
            tempMin: 16.7,
            tempMax: 25.45,
            humidity: 45,      
            weather: "haze",
    });
    
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}