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
        .then(blob => {

        
            
       

            console.log(data)
           
         
            console.log(data._embedded.events);
            let events = data._embedded.events[0].name
            let events2 = data._embedded.events[0].dates
            let events3 = data._embedded.events[0].url
                .catch(error => {
                    console.log(error);

                })

            let div = document.getElementById("temp")
            let div2 = document.getElementById("temp2")
            let div3 = document.getElementById("temp3")
            let div4 = document.getElementById("temp4").src = URL.createObjectURL(blob);
         
          
            
        
            div.textContent = `${events.toString()}`
            div2.textContent = `dates:${events2.toString()}`
            div4.textContent = 
            // div3.textContent = ``url-->
          

        })
    })
}