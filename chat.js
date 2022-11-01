
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD2Vd1KT6XwvaL1f0D83bjSp8-7GQgDEXM",
    authDomain: "letschat--links.firebaseapp.com",
    databaseURL: "https://letschat--links-default-rtdb.firebaseio.com",
    projectId: "letschat--links",
    storageBucket: "letschat--links.appspot.com",
    messagingSenderId: "759100683004",
    appId: "1:759100683004:web:83ae9d800127c285fa1d79"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);





function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
localStorage.setItem("user_name",user_name);

window.location="chat_room.html";
}



