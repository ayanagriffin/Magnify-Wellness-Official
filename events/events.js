var db = firebase.firestore();

var eventsRef = db.collection("events");
const events = document.querySelector("#events");

eventsRef.orderBy("timestamp", "asc").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        events.innerHTML += "<p style='text-align: left; padding-left: 550px;'> <br><span>" + doc.data().title + " </span> <br> <img src='./images/pin.svg' style='width: 15px; height: 20px; position: relative; top: 4px;'>" + "<span style='font-family: 'Montserrat', sans-serif; font-weight: 8;'>" + doc.data().location + " </span>" + 
        "<span> <img src='./images/clock.svg' style='width: 15px; height: 20px; position: relative; top: 4px;'> " + doc.data().date + " </span>" + "<span>" + doc.data().time + " </span> <br>" + "<span>" + doc.data().description + " </span> <br>" + "<span> Register Here: " 
        + doc.data().link + "<button type='submit' onclick='document.location=\"" + doc.data().link + "\"'>Register</button> </span><br><br></p> <hr class='beautiful-line'>";
        console.log(doc.id, " => ", doc.data());
    
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});