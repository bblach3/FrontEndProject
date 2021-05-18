function getInputValue() {
    // Selecting the input element and get its value 
    var enterButton = document.getElementById("events").value;
    var url = api + enterButton + key
    var arr = []


    //https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO
    var api = "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
    var key = "&size=50&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let event = {};
            for (let i = 0; i < data._embedded.events.length; i++) {
                events = data._embedded.events[i].name
                events2 = data._embedded.events[i].dates.start.localDate
                events3 = data._embedded.events[i].images[0].url
                events4 = data._embedded.events[i].url
                arr.push(events);
                event = {};



            }
            displayevents(arr)
            console.log(data);

            let div = document.getElementById("temp")
            let div2 = document.getElementById("temp2")
            let div3 = document.getElementById("temp3")
            // let div4 = document.getElementById("temp4").src = events3




            // div.textContent = `${events.toString()}`
            // div2.textContent = `Dates:${events2.toString()}`







        })
    function displayEvents(eventsArr) {
        var enterButton = document.getElementById("temps")
        let innerHtmlString = ""
        eventsArr.forEach(element => {
            innerHtmlString += `
<div id="temp" class="container-fluid">
            <div class="row d-flex flex-row d-inline-flex">
              <div class="col-12">

            <div class="card border-2 border-primary" style="width: 18rem;">
            <img class="card-img-top" src="${element.events3}" alt="Card image cap">
             <div class="card-body">
            <h5 class="card-title">${element.events}</h5>
            <p class="card-text">${element.events2}</p>
                <a href="${element.events4}" class="btn btn-primary">More Info</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            <br>

            </div>
                     `


        });
    }
    location.innerHTML = innerHtmlString;
}