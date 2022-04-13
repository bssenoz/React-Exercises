import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WheatherContext = createContext();

export const WheatherProvider = ({ children }) => {
    const id = process.env.REACT_APP_ID;

    const [wheatherList, setWheatherList] = useState([])

    const [city, setCity] = useState(["Antalya"])

    const values = { city, setCity, wheatherList }

    const getData = async (city) => {
        try {
            await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&units=metric&cnt=7&appid=${id}`).then(
                (response => setWheatherList(response.data.list))
            );

        } catch {
            console.log("Data not found");
        }

    };

    useEffect(() => {
        getData(city)

    }, [city])

    return (
        <WheatherContext.Provider value={values}>
            {children}
        </WheatherContext.Provider>
    )
}