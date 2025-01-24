import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo})
{
    let[city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="secrect";

    let getWeatherInfo = async() =>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let JsonResponse= await response.json();
        console.log(JsonResponse);
        let result={
            city:city,
            temp: JsonResponse.main.temp,
            tempMin: JsonResponse.main.temp_min,
            tempMax: JsonResponse.main.temp_max,
            humidity: JsonResponse.main.humidity,
            feelsLike: JsonResponse.main.feels_like,
            weather: JsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    };
    

    let handleChange =(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit= async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo); 
        }
        }
    return(
        <div className='SearchBox'>
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City-name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}
