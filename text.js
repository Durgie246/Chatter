var firebaseConfig = {
    apiKey: "AIzaSyDnraxlMmbX5fQaF1jhHloHceaXMF2CMuk",
    authDomain: "practice-f8f76.firebaseapp.com",
    databaseURL: "https://practice-f8f76-default-rtdb.firebaseio.com",
    projectId: "practice-f8f76",
    storageBucket: "practice-f8f76.appspot.com",
    messagingSenderId: "34334753004",
    appId: "1:34334753004:web:44d8e3eb9c14dec797a5c9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function Send()
{
social = "social";
msg = document.getElementById("msg").value;
username = localStorage.getItem("user_name");
firebase.database().ref("/").child(social).push({
    "msg": msg,
    "name" : username
});
localStorage.setItem("msg", msg);
getData();
}

function getData() { firebase.database().ref("/"+ social).on('value', function(snapshot) { document.getElementById("text_messages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['msg'];
name_with_tag = "<h4 id = 'name3' class = 'hello'>" + name + ":" +"</h4>";
message_with_tag = "<h4 style = 'background-color: lightgreen; margin-top:0px'id = 'msg1'class='message_h4'>" + message + "</h4> " +"<br>" + "<hr>";

row = name_with_tag + message_with_tag; 
document.getElementById("text_messages").innerHTML += row;

//End code
} });  }); }