function getInputValue(){
    // Selecting the input element and get its value 
    var enterButton = document.getElementById("venues").value;
   


//https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO

var api = "https://app.ticketmaster.com/discovery/v2/venues.json?keyword="

var key = "&size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO"


var url = api+enterButton+key

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
        console.log(data);
        console.log(data._embedded.events[0].name);


        let Venue2 = data._embedded.events[0].name
        let Venue3 = data._embedded.events[0].dates.start.localDate
        let Venue4 = data._embedded.events[0].url
        let Venue5 = data._embedded.events[1].name
        let Venue6 = data._embedded.events[1].dates.start.localDate
        let Venue7 = data._embedded.events[1].url
        let Venue8 = data._embedded.events[2].name
        let Venue9 = data._embedded.events[2].dates.start.localDate
        let Venue10 = data._embedded.events[2].url
        



        let div2 = document.getElementById('temp');
        let div3 = document.getElementById('temp2');
        //let div4 = document.getElementById('temp3');

        var mydiv = document.getElementById("temp3");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue4.toString()}`);
        let div4 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);


        let div5 = document.getElementById('temp4');
        let div6 = document.getElementById('temp5');
        //let div7 = document.getElementById('temp6');
        var mydiv = document.getElementById("temp6");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue7.toString()}`);
        let div7 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);


        let div8 = document.getElementById('temp7');
        let div9 = document.getElementById('temp8');
        //let div10 = document.getElementById('temp9');
        var mydiv = document.getElementById("temp9");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue10.toString()}`);
        let div10 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);



        div2.textContent = `${Venue2.toString()}`
        div3.textContent = `${Venue3.toString()}`
        //div4.textContent = `${Venue4.toString()}`
        
       
        div5.textContent = `${Venue5.toString()}`
        div6.textContent = `${Venue6.toString()}`
        //div7.textContent = `${Venue7.toString()}`

        div8.textContent = `${Venue8.toString()}`
        div9.textContent = `${Venue9.toString()}`
        //div10.textContent = `${Venue10.toString()}`

       
        
       
    })

    document.getElementById('temp3').innerHTML = '';
    document.getElementById('temp6').innerHTML = '';
    document.getElementById('temp9').innerHTML = '';

})


}

