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

    console.log(data._embedded)
    console.log(data._embedded.venues[0].upcomingEvents.ticketmaster)
    

    //console.log(data._embedded)



    //let Venue = data._embedded.venues[0].upcomingEvents.ticketmaster
   let Venue = data._embedded.venues[0].id



    fetch("https://app.ticketmaster.com/discovery/v2/events?venueId=" + Venue + "&size=20&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data._embedded.events[0].name);


        let Venue2 = data._embedded.events[0].name
        let Venue3 = data._embedded.events[0].dates.start.localDate
        let pic1 = data._embedded.events[0].images[0].url
        let Venue4 = data._embedded.events[0].url

        let Venue5 = data._embedded.events[1].name
        let Venue6 = data._embedded.events[1].dates.start.localDate
        let pic2 = data._embedded.events[1].images[0].url
        let Venue7 = data._embedded.events[1].url

        let Venue8 = data._embedded.events[2].name
        let Venue9 = data._embedded.events[2].dates.start.localDate
        let pic3 = data._embedded.events[2].images[0].url
        let Venue10 = data._embedded.events[2].url

        let Venue11 = data._embedded.events[3].name
        let Venue12 = data._embedded.events[3].dates.start.localDate
        let pic4 = data._embedded.events[3].images[0].url
        let Venue13 = data._embedded.events[3].url

        let Venue14 = data._embedded.events[4].name
        let Venue15 = data._embedded.events[4].dates.start.localDate
        let pic5 = data._embedded.events[4].images[0].url
        let Venue16 = data._embedded.events[4].url

        let Venue17 = data._embedded.events[5].name
        let Venue18 = data._embedded.events[5].dates.start.localDate
        let pic6 = data._embedded.events[5].images[0].url
        let Venue19 = data._embedded.events[5].url

        let Venue20 = data._embedded.events[6].name
        let Venue21 = data._embedded.events[6].dates.start.localDate
        let pic7 = data._embedded.events[6].images[0].url
        let Venue22 = data._embedded.events[6].url

        let Venue23 = data._embedded.events[7].name
        let Venue24 = data._embedded.events[7].dates.start.localDate
        let pic8 = data._embedded.events[7].images[0].url
        let Venue25 = data._embedded.events[7].url

        let Venue26 = data._embedded.events[8].name
        let Venue27 = data._embedded.events[8].dates.start.localDate
        let pic9 = data._embedded.events[8].images[0].url
        let Venue28 = data._embedded.events[8].url

        let Venue29 = data._embedded.events[9].name
        let Venue30 = data._embedded.events[9].dates.start.localDate
        let pic10 = data._embedded.events[9].images[0].url
        let Venue31 = data._embedded.events[9].url
        



        let div2 = document.getElementById('temp');
        let div3 = document.getElementById('temp2');
        let picture1 = document.getElementById('pic1').src = pic1
        //let div4 = document.getElementById('temp3');
        var mydiv = document.getElementById("temp3");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue4.toString()}`);
        let div4 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);


        let div5 = document.getElementById('temp4');
        let div6 = document.getElementById('temp5');
        let picture2 = document.getElementById('pic2').src = pic2
        //let div7 = document.getElementById('temp6');
        var mydiv = document.getElementById("temp6");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue7.toString()}`);
        let div7 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);


        let div8 = document.getElementById('temp7');
        let div9 = document.getElementById('temp8');
        let picture3 = document.getElementById('pic3').src = pic3
        //let div10 = document.getElementById('temp9');
        var mydiv = document.getElementById("temp9");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue10.toString()}`);
        let div10 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);

        let div11 = document.getElementById('temp10');
        let div12 = document.getElementById('temp11');
        let picture4 = document.getElementById('pic4').src = pic4
        //let div4 = document.getElementById('temp3');
        var mydiv = document.getElementById("temp12");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue13.toString()}`);
        let div13 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);


        let div14 = document.getElementById('temp13');
        let div15 = document.getElementById('temp14');
        let picture5 = document.getElementById('pic5').src = pic5
        //let div7 = document.getElementById('temp6');
        var mydiv = document.getElementById("temp15");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue16.toString()}`);
        let div16 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);


        let div17 = document.getElementById('temp16');
        let div18 = document.getElementById('temp17');
        let picture6 = document.getElementById('pic6').src = pic6
        //let div10 = document.getElementById('temp9');
        var mydiv = document.getElementById("temp18");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue19.toString()}`);
        let div19 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);

        let div20 = document.getElementById('temp19');
        let div21 = document.getElementById('temp20');
        let picture7 = document.getElementById('pic7').src = pic7
        //let div4 = document.getElementById('temp3');
        var mydiv = document.getElementById("temp21");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue22.toString()}`);
        let div22 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);


        let div23 = document.getElementById('temp22');
        let div24 = document.getElementById('temp23');
        let picture8 = document.getElementById('pic8').src = pic8
        //let div7 = document.getElementById('temp6');
        var mydiv = document.getElementById("temp24");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue25.toString()}`);
        let div25 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);


        let div26 = document.getElementById('temp25');
        let div27 = document.getElementById('temp26');
        let picture9 = document.getElementById('pic9').src = pic9
        //let div10 = document.getElementById('temp9');
        var mydiv = document.getElementById("temp27");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue28.toString()}`);
        let div28 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);

        let div29 = document.getElementById('temp28');
        let div30 = document.getElementById('temp29');
        let picture10 = document.getElementById('pic10').src = pic10
        //let div10 = document.getElementById('temp9');
        var mydiv = document.getElementById("temp30");
        var aTag = document.createElement('a');
        aTag.setAttribute("href", `${Venue31.toString()}`);
        let div31 = aTag.innerText = "Click here for more info";
        mydiv.appendChild(aTag);



        div2.textContent = `${Venue2.toString()}`
        div3.textContent = `${Venue3.toString()}`
            
        div5.textContent = `${Venue5.toString()}`
        div6.textContent = `${Venue6.toString()}`
      
        div8.textContent = `${Venue8.toString()}`
        div9.textContent = `${Venue9.toString()}`

        div11.textContent = `${Venue11.toString()}`
        div12.textContent = `${Venue12.toString()}`

        div14.textContent = `${Venue14.toString()}`
        div15.textContent = `${Venue15.toString()}`
      
        div17.textContent = `${Venue17.toString()}`
        div18.textContent = `${Venue18.toString()}`
      
        div20.textContent = `${Venue20.toString()}`
        div21.textContent = `${Venue21.toString()}`

        div23.textContent = `${Venue23.toString()}`
        div24.textContent = `${Venue24.toString()}`
      
        div26.textContent = `${Venue26.toString()}`
        div27.textContent = `${Venue27.toString()}`

        div29.textContent = `${Venue29.toString()}`
        div30.textContent = `${Venue30.toString()}`
       
        
        

       
        
       
    })

    document.getElementById('temp').innerHTML = '';
    document.getElementById('temp2').innerHTML = '';
    document.getElementById('pic1').innerHTML = '';
    document.getElementById('temp3').innerHTML = ''; //pic
    document.getElementById('temp4').innerHTML = ''; 
    document.getElementById('temp5').innerHTML = ''; 
    document.getElementById('temp6').innerHTML = '';//pic
    document.getElementById('temp7').innerHTML = '';
    document.getElementById('temp8').innerHTML = '';
    document.getElementById('temp9').innerHTML = ''; //pic
    document.getElementById('temp10').innerHTML = ''; 
    document.getElementById('temp11').innerHTML = ''; 
    document.getElementById('temp12').innerHTML = '';
    document.getElementById('temp13').innerHTML = '';
    document.getElementById('temp14').innerHTML = '';
    document.getElementById('temp15').innerHTML = '';
    document.getElementById('temp16').innerHTML = '';
    document.getElementById('temp17').innerHTML = '';
    document.getElementById('temp18').innerHTML = '';
    document.getElementById('temp19').innerHTML = '';
    document.getElementById('temp20').innerHTML = '';
    document.getElementById('temp21').innerHTML = '';
    document.getElementById('temp22').innerHTML = '';
    document.getElementById('temp23').innerHTML = '';
    document.getElementById('temp24').innerHTML = '';
    document.getElementById('temp25').innerHTML = '';
    document.getElementById('temp26').innerHTML = '';
    document.getElementById('temp27').innerHTML = '';
    document.getElementById('temp28').innerHTML = '';
    document.getElementById('temp29').innerHTML = '';
    document.getElementById('temp30').innerHTML = '';

})


}

