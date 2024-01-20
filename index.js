const jokecontainer = document.getElementById("joke")
const btn = document.getElementById("btn")
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke=()=>{
    fetch(url)
    .then(data=>data.json())
    .then(item => {
        jokecontainer.textContent=`${item.joke}`;
    });
}
btn.addEventListener("click",getJoke)
getJoke();
const quotecontainer = document.getElementById("quote")
const btn1 = document.getElementById("btn1")
const url2 = 'https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53aac64b09mshcc81f7a23f2a4a8p181155jsn5800e4f73360',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

let getQuote=()=>{
    fetch(url2,options)
    .then(data=>data.json())
    .then(item=>{
        quotecontainer.textContent=`${item.text}`
    })

}

btn1.addEventListener("click",getQuote)
getQuote()

let weather ={
    apiKey:"aa1d1e34e51b6f6cb69275758a8c8013",
    fetchWeather:function(city){
        if (city=='hamilton'){
            city="hamilton,CA"
        }
        if (city=='Hamilton'){
            city="hamilton,CA"
        }

        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){

        const{ name }=data;
        const{ description,icon }=data.weather[0];
        const{ temp, humidity }=data.main;
        const{ speed }= data.wind;
        console.log(name,description,icon,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in "+ name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText="Wind speed : "+speed +"km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
document.querySelector('.search-bar').addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {      
        weather.search();             
    }
})
weather.fetchWeather("hamilton")