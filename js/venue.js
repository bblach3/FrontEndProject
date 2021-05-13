function getInputValue(){
    // Selecting the input element and get its value 
    var enterButton = document.getElementById("theCity").value;
   
    
    // Displaying the value
    // document.getElementById("temp").innerHTML = enterButton;
    //"http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=9361bd03ec7175e9eea92fdf7a717518"
    
    
// var api = "http://api.openweathermap.org/data/2.5/weather?q="
// //var city = "Chicago"
// var key = "&appid=9361bd03ec7175e9eea92fdf7a717518"

//https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO

var api = "https://app.ticketmaster.com/discovery/v2/events.json?venueId="
//var city = "Chicago"
var key = "&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO"


var url = api+enterButton+key

fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data)
    //console.log(data.main.temp)
    console.log(data.main)

    // let kelvin = data.main.temp
    let Venue = data.events
    // let degC = Math.floor(kelvin -273.15)
    // console.log(degC);

    // //F = C * 1.8 + 32

    // let degF = Math.floor(degC * 1.8 +32)

    // console.log(degF)

    let div = document.getElementById('temp');

    //div.textContent = `${degF.toString()} F`
    div.textContent = `${Venue.toString()}`


})






}

