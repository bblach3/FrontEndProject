function getInputValue() {
    // Selecting the input element and get its value 
    var enterButton = document.getElementById("events").value;
    
    //https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO
    var api = "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
    var key = "&size=50&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO"
    var url = api + enterButton + key
    fetch(url)
        .then(response => response.json())
        .then(data => {
           let event = {};
           let arr =[]
           for(let i=0; i < data._embedded.events.length; i++){
               events = data._embedded.events[i].name
                events2 = data._embedded.events[i].dates.start.localDate
                events3 = data._embedded.events[i].images[0].url
                arr.push(event);
                event = {};


           }
            console.log(arr);

            let div = document.getElementById("temp")
            let div2 = document.getElementById("temp2")
            let div3 = document.getElementById("temp3")
            let div4 = document.getElementById("temp4").src =events3
         
          
            
        
            div.textContent = `${events.toString()}`
            div2.textContent = `Dates:${events2.toString()}`

     
          

        })
    
}