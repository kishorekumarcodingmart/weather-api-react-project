import React from 'react'

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}


function Content({details}) {
  return (
    <>
      <h4>PLace : {details.name} at Date : {timeConverter(details.dt)}</h4>
      {/* {console.log(details.weather.main)} */}
      <h1>Coordinates</h1>
      <h4>Longitude : {details.coord.lon}</h4>
      <h4>Latitude : {details.coord.lat}</h4>
      <hr />
      <h1>Weather Details</h1>
      <h4>Cloud : {details.weather[0].main}</h4>
      <h4>Description : {details.weather[0].description}</h4>
      <hr />
      <h1>Temperature</h1>
      <h4>Temperature : {details.main.temp} Fahrenheit</h4>
      <h4>Feels Like : {details.main.feels_like} Fahrenheit</h4>
      <h4>Min Temperature : {details.main.temp_min} Fahrenheit</h4>
      <h4>Max Temperature : {details.main.temp_max} Fahrenheit</h4>
      <h4>Pressure : {details.main.pressure} hPa</h4>
      <h4>Humidity : {details.main.humidity} %</h4>
      <hr />
      <h1>Visibility : {details.visibility} meters</h1>
      <hr />
      <h1>Wind</h1>
      <h4>Wind Speed : {details.wind.speed} meter/sec</h4>
      <h4>Wind Degree : {details.wind.deg} degrees</h4>
      <h1>Sunrise & Sunset</h1>
      <h4>Sunrise : {timeConverter(details.sys.sunrise)}</h4>
      <h4>Sunset : {timeConverter(details.sys.sunset)}</h4>
    </>
  )
}

export default Content