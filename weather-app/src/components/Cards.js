import React, { useContext } from 'react'
import { WheatherContext } from '../context/WeatherContext'
import "./style.css"

const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

export const Cards = () => {

    const {  wheatherList } = useContext(WheatherContext)

    const getIcon = (iconId) => {
        return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    };

    const getDescription = (description) => {
        const words = description.split(" ");   
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
            
        description = words.join(" ")
        
        return description
    };

    const getTemp = (temp) => {
        return temp
    }

    return (

        <div className='cards'>
            {
                wheatherList.map((data, index) => ( 

                    <div key={index} className="card" >
                        <div className="card-header">{days[index]}</div>
                        <div className="card-main" >
                            <img src={getIcon(data.weather[0].icon)} alt="Loading" ></img>
                            <div className="main-description">{getDescription(data.weather[0].description)}</div><br></br>
                            <div className="main-temp">{getTemp(data.main.temp_min)}°C - {getTemp(data.main.temp_max)}°C</div>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}