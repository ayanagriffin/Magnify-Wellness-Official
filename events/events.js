var db = firebase.firestore();

var eventsRef = db.collection("events");
const events = document.querySelector("#events");

eventsRef.orderBy("timestamp", "asc").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        events.innerHTML += "<p> <span style='color:blue'>" + doc.data().title + " </span>" + "<span>" + doc.data().date + " </span>" + 
        "<span>" + doc.data().time + " </span>" + "<span>" + doc.data().location + " </span>" + "<span>" + doc.data().description + " </span>" + "<span>" 
        + doc.data().link + " </span></p>";
        console.log(doc.id, " => ", doc.data());
    
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});