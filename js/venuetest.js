fetch(`https://api.seatgeek.com/2/venues?client_id=MjE5MTM0MDJ8MTYyMDkyMzM3NS4xNjc1NTM0`)
    .then(response => response.json())
    .then(data => { console.log(data)
    })




   // https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO