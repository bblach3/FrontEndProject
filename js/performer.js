
const button = document.getElementById("btn");
const inputValue = document.querySelector(".inputValue");










button.addEventListener("click", function(){
fetch(`https://api.seatgeek.com/2/performers?client_id=MjE5MTM0MDJ8MTYyMDkyMzM3NS4xNjc1NTM0`)
    .then(response => response.json())
    .then(data => { console.log(data)
        const nameValue = data["name"]
       
        const descValue = data["weather"][0]['description'];
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;




    })
        .catch(err => alert("no events"))








    
    })
