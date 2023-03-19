let button = document.querySelector('button');
async function showWeather(){
    let input = document.querySelector('input');
    let title = document.querySelector('h1');


    const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=4d1cd07a95bd4bc6beb95720231903&q=${input.value}`, {mode: 'cors'});
    const response = await request.json();
    title.textContent = response.current.condition.text;
    console.log(response.current.condition.text);


}
button.addEventListener('click', ()=>{
    showWeather();
})