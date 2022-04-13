import React, { useContext } from 'react'
import { WheatherContext } from '../context/WeatherContext'

export const Input = () => {
    const data = useContext(WheatherContext)

        return(
            <form >
                <label>Şehir bilgisi giriniz</label><br></br>
                    <input type="text" placeholder="Antalya" onChange={(e) => data.setCity(e.target.value)}/>
            </form>

        )
       

}