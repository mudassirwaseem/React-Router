import React, { useState, useEffect } from "react";
import axios from "axios";

function Weatherapp() {
    const [weather, setweather] = useState(null);
    const [city, setcity] = useState(null);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d21c26b140fbb0fd0f07abe4b2694e98&units=metric`)
            .then(res => {

                const { main, name, wind, weather } = res.data
                // console.log(main,name,wind,weather)
                setweather({ main, name, wind, weather })



            });
    }, [city]);
    console.log(weather)
    return (

        <div  >
            <div className="sd" className="text-center" ><span><h1 style={{color:"red",fontFamily:"inherit",fontSize:"60px"}}>Weather <span style={{color:"blue",fontFamily:"inherit"}} >App</span></h1></span></div>
            <div className="text-center">
                <input className="main1 mt-3" type="text" placeholder="Enter City Name" onChange={(e) => { setcity(e.target.value) }} />
            </div>
            {!weather ? (
                <div className="container d-flex justify-content-center">
                    <div className="weather">
                        <div className="row">
                            <div className=" col">
                                <div className="card1"> <span className="icon"><img className="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                                    <div className="title">
                                        <h1>Sydney</h1>
                                    </div>
                                    <div className="temp mt-5">+20c<sup>°</sup></div>
                                    <div className="row mt-2">
                                        <div className="col-4">
                                            <div className="header">Humidity</div>
                                            <div className="value">--</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="header">Feels Like </div>
                                            <div className="value">--</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="header">Speed</div>
                                            <div className="value">--</div>
                                        </div>

                                        <div className="col-4">
                                                <div className="header">Max-Temp</div>
                                                <div className="value">--</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Min-Temp</div>
                                                <div className="value">--</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Pressure</div>
                                                <div className="value">--</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div></div></div>

            )
                : <div >
                    <div className="container d-flex justify-content-center">
                        <div className="weather">
                            <div className="row">
                                <div className=" col">
                                    <div className="card1"> <span className="icon"><img className="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                                        <div className="title">
                                            <h1>{weather.name}</h1>
                                        </div>
                                        <div className="temp mt-5">{weather.main.temp}c<sup>°</sup></div>
                                        <div className="row mt-2">
                                            <div className="col-4">
                                                <div className="header">Humidity</div>
                                                <div className="value">{weather.main.humidity}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Feels Like</div>
                                                <div className="value">{weather.main.feels_like}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Speed</div>
                                                <div className="value">{weather.wind.speed}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Max-Temp</div>
                                                <div className="value">{weather.main.temp_max}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Min-Temp</div>
                                                <div className="value">{weather.main.temp_min}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Pressure</div>
                                                <div className="value">{weather.main.pressure}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div></div></div>
            }
        </div>
    );
}
export default Weatherapp;