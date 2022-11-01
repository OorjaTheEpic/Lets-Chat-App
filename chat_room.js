


function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name",room_name);

      window.location = "chat_room.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' ># "+ Room_names +"</div><hr>"
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_room.html"
}

function logout() {
     
     localStorage.removeItem("username")
     localStorage.removeItem("room_name")
     window.location = "index.html"
}

function send()
{
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name)
}