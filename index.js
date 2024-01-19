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