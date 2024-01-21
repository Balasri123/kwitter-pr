function logout(){
    window.location = "index.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyDYu7BD1lmIDgYNKjf3bCfknQAyRuMpjXE",
    authDomain: "kwitter-pro-a1d8d.firebaseapp.com",
    databaseURL: "https://kwitter-pro-a1d8d-default-rtdb.firebaseio.com",
    projectId: "kwitter-pro-a1d8d",
    storageBucket: "kwitter-pro-a1d8d.appspot.com",
    messagingSenderId: "290731998817",
    appId: "1:290731998817:web:8d5359c2a1999428153420"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  var username = localStorage.getItem("username");
 document.getElementById("username").innerHTML = "Welcome "+username+"!!";

 function addroom(){
     roomname=document.getElementById("roomname").value;
     localStorage.setItem("roomname",roomname);
     firebase.database().ref("/").child(roomname).update({
           purpose:"adding roomname"
     });
     window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     
       row = "<div id = "+Room_names+" class='room_name' onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
     
     });});}
getData();

function redirecttoroomname(name){
     localStorage.setItem("roomname",name);
     window.location = "kwitter_page.html";
}

