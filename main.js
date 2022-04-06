const doggoButton = $('.doggo-button')
const randomWeatherButton = $('.random-weather-button')
const dogContent = $('.dog-display')
const weatherContent = $('.weather-display')
const weatherImg = $('.main-weather img')
const weatherImage = $('img.weather-display')
const wind = $('.wind')
const temp = $('.temp')
const desc = $('.desc')
const wind1 = $('.wind1')
const temp1 = $('.temp1')
const wind2 = $('.wind2')
const temp2 = $('.temp2')
const wind3 = $('.wind3')
const temp3 = $('.temp3')

hidden = $('.hidden')
let Form = document.querySelector('#weatherform');
let userimputcity = document.querySelector("#userInput");


doggoButton.on('click', function(){
    console.log('clicked')
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (rawData){
        return rawData.json()
    })
    .then(function (data) {
        dogContent.attr('src', `${data.message}`)
    });
})

function weathersubmit(event){
    event.preventDefault();
    console.log('clicked')
    fetch(`https://goweather.herokuapp.com/weather/${userimputcity.value}`)
    .then(function (rawData){
        return rawData.json()
    })
    .then(function (data) {
        weatherImage.remove()
        if(data.description === 'span'){
            wind.text(`not found`)
            temp.text(`${data.temperature} ${data.description} --${data.forecast[0].wind}--${data.forecast[1].wind}--${data.forecast[2].wind}`)
        }
        else{
            hidden.removeClass('hidden')
            if(data.description === "Sunny" ){
                weatherImg.attr('src', 'https://thumbs.dreamstime.com/z/sunny-weather-icon-vector-sunny-weather-concept-illustration-sunny-weather-icon-vector-sunny-weather-concept-illustration-isolated-178014100.jpg')
            }
            else if(data.description === "Patchy light rain with thunder" ){
                weatherImg.attr('src', 'https://media.istockphoto.com/photos/thunderstorm-lightning-with-dark-cloudy-sky-picture-id517643357?b=1&k=20&m=517643357&s=170667a&w=0&h=-ofkaxfhjSM5HshQS5bSjk0dWTQeZKDGnbdOkq3O4ro=')
            }
            else if(data.description === "Partly cloudy" ){
                weatherImg.attr('src', 'https://media.istockphoto.com/photos/sky-background-picture-id598222542?k=20&m=598222542&s=612x612&w=0&h=j4AOi6TLrJ-idL274GZIrESXnlzNQDc6bA8nhEuh9EY=')
            }
            else if(data.description === "Patchy rain possible" ){
                weatherImg.attr('src', 'https://www.gardeningknowhow.com/wp-content/uploads/2019/02/clouds.jpg')
            }
            desc.text(`${data.description}`)
            wind.text(`${data.wind}`)
            temp.text(`${data.temperature}`)
            temp1.text(`${data.forecast[0].temperature}`)
            temp2.text(`${data.forecast[1].temperature}`)
            temp3.text(`${data.forecast[2].temperature}`)
            wind1.text(`${data.forecast[0].wind}`)
            wind2.text(`${data.forecast[1].wind}`)
            wind3.text(`${data.forecast[2].wind}`)
        }
    });

    Form.reset();
}
Form.addEventListener("submit",function(event){
    weathersubmit(event);
});

randomWeatherButton.on('click', function(){
    console.log('clicked')
    fetch(`https://goweather.herokuapp.com/weather/cancun`)
    .then(function (rawData){
        return rawData.json()
    })
    .then(function (data) {
        weatherImage.remove()
        if(data.description === 'span'){
            wind.text(`not found`)
            temp.text(`${data.temperature} ${data.description} --${data.forecast[0].wind}--${data.forecast[1].wind}--${data.forecast[2].wind}`)
        }
        else{
            hidden.removeClass('hidden')
            if(data.description === "Sunny" ){
                weatherImg.attr('src', 'https://thumbs.dreamstime.com/z/sunny-weather-icon-vector-sunny-weather-concept-illustration-sunny-weather-icon-vector-sunny-weather-concept-illustration-isolated-178014100.jpg')
            }
            else if(data.description === "Patchy light rain with thunder" ){
                weatherImg.attr('src', 'https://media.istockphoto.com/photos/thunderstorm-lightning-with-dark-cloudy-sky-picture-id517643357?b=1&k=20&m=517643357&s=170667a&w=0&h=-ofkaxfhjSM5HshQS5bSjk0dWTQeZKDGnbdOkq3O4ro=')
            }
            else if(data.description === "Partly cloudy" ){
                weatherImg.attr('src', 'https://media.istockphoto.com/photos/sky-background-picture-id598222542?k=20&m=598222542&s=612x612&w=0&h=j4AOi6TLrJ-idL274GZIrESXnlzNQDc6bA8nhEuh9EY=')
            }
            else if(data.description === "Patchy rain possible" ){
                weatherImg.attr('src', 'https://www.gardeningknowhow.com/wp-content/uploads/2019/02/clouds.jpg')
            }
            desc.text(`${data.description}`)
            wind.text(`${data.wind}`)
            temp.text(`${data.temperature}`)
            temp1.text(`${data.forecast[0].temperature}`)
            temp2.text(`${data.forecast[1].temperature}`)
            temp3.text(`${data.forecast[2].temperature}`)
            wind1.text(`${data.forecast[0].wind}`)
            wind2.text(`${data.forecast[1].wind}`)
            wind3.text(`${data.forecast[2].wind}`)
        }
    });
})

function rng(m){
    return Math.floor(Math.random()*m)
};