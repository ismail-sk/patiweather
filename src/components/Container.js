import React,{ useEffect, useState }  from 'react';
import {useSelectedCity} from "../Context"
//import test from "./onecall.json"
import "./cardTable.css";
import axios from "axios";

const key = "ADD_YOUR_KEY_HERE";

function Container() {
    const {selectedCity} = useSelectedCity();
    const [weather,setWeather]=useState("");
    
    useEffect(
      async ()=>{
      const {data}= await axios.get(
`https://api.openweathermap.org/data/2.5/onecall?lat=${Number(selectedCity.latitude)}&lon=${Number(selectedCity.longitude)}&units=metric&exclude=minutely,hourly&lang=tr&appid=${key}`
        )
        setWeather(data);

    },[selectedCity]);
    console.log(weather);


  return (
  
  weather===""?
    <div>"Yükleniyor..."</div>
    :
    <div className="weather-box">
      {
        weather.daily.map((weatherItem,index)=>{
        return <Card key={index} weather={weatherItem} />
        })
      }
    </div>
  )
}

function Card( {weather} ) {
  return (
  <div className= { new Date(weather.dt*1000).getDate() === new Date().getDate() ? "weather-cart today" : "weather-cart"}>
    <p className="day">{new Date(weather.dt*1000).toLocaleDateString("tr",{weekday:"long"})}</p>
    <p className="description">{weather.weather[0].description}</p> 
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weatheré-icon"/> {/* width="90" height="90" */}
        <p className="temp-day">{(Number(weather.temp.day)).toFixed()} °C</p>

    <div className='tooltip'>
      Detaylar...

      <div className="tooltiptext">

        <div>
          <div className="temp-max roww">

            <div className='temp-maxSVG svgSetter roww'/>{(Number(weather.temp.max)).toFixed()} °C</div>
            <div className="temp-min roww">
              <div className='temp-minSVG svgSetter roww'/>
              {(Number(weather.temp.min)).toFixed()} °C
            </div>

            <br/>

            <div className='roww' >
              <div className='humiditySVG svgSetter roww'>
              </div>{weather.humidity} %
            </div>

            <div className='roww'>
              <div className='windSVG svgSetter roww'></div>
              {weather.wind_speed} m/s
            </div>

          </div>

          <div className="tableContainer">
            <table>
              <thead>
      
                <tr>
                  <th></th>
                  <th>Sabah</th>
                  <th>Öğlen</th>
                  <th>Akşam</th>
                  <th>Gece</th>
                </tr>
      
              </thead>
      
              <tbody>
                <tr>
                  <td className='rowName'>Sıcaklık</td>
                  <td><p>{(Number(weather.temp.morn)).toFixed()}°C</p></td>
                  <td><p>{(Number(weather.temp.day)).toFixed()}°C</p></td>
                  <td><p>{(Number(weather.temp.eve)).toFixed()}°C</p></td>
                  <td><p>{(Number(weather.temp.night)).toFixed()}°C</p></td>
                </tr>
      
                <tr>
                  <td className='rowName'>Hissedilen</td>
                  <td><p>{(Number(weather.feels_like.morn)).toFixed()}°C</p></td>
                  <td><p>{(Number(weather.feels_like.day)).toFixed()}°C</p></td>
                  <td><p>{(Number(weather.feels_like.eve)).toFixed()}°C</p></td>
                  <td><p>{(Number(weather.feels_like.night)).toFixed()}°C</p></td>
                </tr>
      
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>   
  )
}
export default Container
