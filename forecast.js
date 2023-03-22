

const dayTempts = document.querySelectorAll('.tempt')
const dayNames = document.querySelectorAll('#dayName');
const dayWeathers = document.querySelectorAll('img');

 
 
 /*********FORECAST SECTION********/
 function forecast(response){
 let i=1;
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
export {forecast};