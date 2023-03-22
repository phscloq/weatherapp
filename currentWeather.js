    import { showWeather } from "./weatherData";
    
    const todayWeather = document.querySelector('.todayWText');
    const cityName = document.querySelector('.cityName');
    const cityTempt = document.querySelector('.cityTemp');
    /*********TODAY INFO SECTION********/
    const feelsLike = document.querySelector('.feelsTemp')
    const humidity = document.querySelector('.humidityPerc')
    const rain = document.querySelector('.rainPerc')
    function currentWeather(response){
    cityName.textContent = `${response.location.name}`;
    cityTempt.textContent = `${response.current.temp_c} °C`;

    todayWeather.textContent = response.current.condition.text;
    feelsLike.textContent = `${response.current.feelslike_c} °C`;
    humidity.textContent = `${response.current.humidity} %`;
    rain.textContent = `${response.forecast.forecastday[0].day.daily_chance_of_rain} %`;

    console.log(response);
    }
    export {currentWeather};