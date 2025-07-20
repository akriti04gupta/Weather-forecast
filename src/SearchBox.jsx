import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [loading, setLoading] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "secret";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let JsonResponse = await response.json();
        let result = {
            city: city,
            temp: JsonResponse.main.temp,
            tempMin: JsonResponse.main.temp_min,
            tempMax: JsonResponse.main.temp_max,
            humidity: JsonResponse.main.humidity,
            feelsLike: JsonResponse.main.feels_like,
            weather: JsonResponse.weather[0].description,
        };
        return result;
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setCity("");
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
        setLoading(false);
    }

    return (
        <div className='SearchBox'>
            <h3>Search for weather</h3>
            {loading && <p>Loading weather data...</p>}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City-name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}
