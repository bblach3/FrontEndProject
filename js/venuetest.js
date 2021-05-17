// fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO`)
//     .then(response => response.json())
//     .then(data => { console.log(data)
//     })

   // https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO

   //https://api.seatgeek.com/2/venues?client_id=MjE5MTM0MDJ8MTYyMDkyMzM3NS4xNjc1NTM0

   function getInputValue(){
    // Selecting the input element and get its value 
    var enterButton = document.getElementById("venues").value;
   


//https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO

var api = "https://app.ticketmaster.com/discovery/v2/venues.json?keyword="

var key = "&size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO"

var url = api+enterButton+key
var arr = []
let listGroupContainer = document.getElementById('temp')
fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data)
    //console.log(data.main.temp)
    //console.log(data._embedded)
    //console.log(data._embedded.venues[0].upcomingEvents.ticketmaster)


    //let Venue = data._embedded.venues[0].upcomingEvents.ticketmaster
    let Venue = data._embedded.venues[0].id

    
    fetch("https://app.ticketmaster.com/discovery/v2/events?venueId=" + Venue + "&size=20&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        // console.log(data._embedded.events[0].name);
        // console.log(data._embedded.events[0].dates.start.localDate);
        // console.log(data._embedded.events[0].url);
    
    
    for(let i=0; i < data._embedded.events.length; i++){

        arr.push(
        `<div>
        ${data._embedded.events[i].name}
        ${data._embedded.events[0].dates.start.localDate}
        ${data._embedded.events[0].url}
     
        </div>`)
    }
    })
    
})

}
