import { showWeather } from "./api"
import { currentWeather } from "./currentWeather";
import { forecast } from "./forecast";
async function getWeather(city='Istanbul'){
    const response = await showWeather(city);
    currentWeather(response);
    forecast(response);
}
export {getWeather};