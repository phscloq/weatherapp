import { showWeather } from "./weatherData"
import { currentWeather } from "./currentWeather";
import { forecast } from "./forecast";
async function defaultWeather(){
    const response = await showWeather('Istanbul');
    currentWeather(response);
    forecast(response);
}
export {defaultWeather};