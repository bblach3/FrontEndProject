function getInputValue(){
    // Selecting the input element and get its value 
    var enterButton = document.getElementById("venues").value;
   
    
    // Displaying the value
    // document.getElementById("temp").innerHTML = enterButton;
    //"http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=9361bd03ec7175e9eea92fdf7a717518"
    
    
// var api = "http://api.openweathermap.org/data/2.5/weather?q="
// //var city = "Chicago"
// var key = "&appid=9361bd03ec7175e9eea92fdf7a717518"

//https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO

var api = "https://app.ticketmaster.com/discovery/v2/venues.json?keyword="

var key = "&size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO"


var url = api+enterButton+key

fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data)
    //console.log(data.main.temp)
    console.log(data._embedded)
    console.log(data._embedded.venues[0].upcomingEvents.ticketmaster)

   
    let Venue = data._embedded.venues[0].upcomingEvents.ticketmaster
    let Venue2 = data._embedded.venues[0].address.line1
    let Venue3 = data._embedded.venues[0].city.name
    let Venue4 = data._embedded.venues[0].generalInfo.generalRule
    let Venue5 = data._embedded.venues[0].parkingDetail
    let Venue6 = data._embedded.venues[0].url
  

    let div = document.getElementById('temp');
    let div2 = document.getElementById('temp2');
    let div3 = document.getElementById('temp3');
    let div4 = document.getElementById('temp4');
    let div5 = document.getElementById('temp5');
    let div6 = document.getElementById('temp6');

    //div.textContent = `${degF.toString()} F`
    div.textContent = `Number of upcoming events: ${Venue.toString()}`
    div2.textContent = `${Venue2.toString()}`
    div3.textContent = `${Venue3.toString()}`
    div4.textContent = `General Info: ${Venue4.toString()}`
    div5.textContent = `Parking Details: ${Venue5.toString()}`
    div6.textContent = `More Details at: ${Venue6.toString()}`


})






}

