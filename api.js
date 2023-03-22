

async function showWeather(c){
    console.log("showWeather called");

    const request = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4d1cd07a95bd4bc6beb95720231903&q=${c}&days=6`, {mode: 'cors'});
    const response = await request.json();
    
    return response;
}
export{showWeather};