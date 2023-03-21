import './style.css';
import background from './background.jpeg';

console.log("Working!");

let button = document.querySelector('button');
    const input = document.querySelector('input');
  
    const todayWeather = document.querySelector('.todayWText');
    const cityName = document.querySelector('.cityName');
    const cityTempt = document.querySelector('.cityTemp');
    /*********TODAY INFO SECTION********/
    const feelsLike = document.querySelector('.feelsTemp')
    const humidity = document.querySelector('.humidityPerc')
    const rain = document.querySelector('.rainPerc')
    /*********FORECAST SECTION********/
    const dayTempts = document.querySelectorAll('.tempt')
    const dayNames = document.querySelectorAll('#dayName');
    const dayWeathers = document.querySelectorAll('img');
    
async function showWeather(c='Istanbul'){
    let i=1;

    const request = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4d1cd07a95bd4bc6beb95720231903&q=${c}&days=6`, {mode: 'cors'});
    const response = await request.json();
    cityName.textContent = `${response.location.name}`;
    cityTempt.textContent = `${response.current.temp_c} °C`;

    todayWeather.textContent = response.current.condition.text;
    feelsLike.textContent = `${response.current.feelslike_c} °C`;
    humidity.textContent = `${response.current.humidity} %`;
    rain.textContent = `${response.forecast.forecastday[0].day.daily_chance_of_rain} %`;

    console.log(response);
    /*********FORECAST SECTION********/
    dayNames.forEach((day)=>{
    day.textContent = response.forecast.forecastday[i].date;
    i++;
    })
    i=1;
    dayTempts.forEach((day)=>{
      
    day.textContent = `${response.forecast.forecastday[i].day.avgtemp_c} °C`;
    
    i++;
    })
    i=1;
    dayWeathers.forEach((day)=>{
   
    day.src = `https:${response.forecast.forecastday[i].day.condition.icon}`;

    i++;
    })
}
showWeather();
button.addEventListener('click', ()=>{
    showWeather(input.value);
})
input.addEventListener('keypress', (e)=>{
    if(e.key==="Enter"){
        e.preventDefault();
        button.click();
    }
})