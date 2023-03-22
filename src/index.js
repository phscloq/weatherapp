import './style.css';
import { getWeather } from '../showWeather';
console.log("Working!");
const button = document.querySelector('button');
const input = document.querySelector('input');
getWeather();
    

button.addEventListener('click', ()=>{
    getWeather(input.value);
})
input.addEventListener('keypress', (e)=>{
    if(e.key==="Enter"){
        e.preventDefault();
        button.click();
    }
})