
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDDeTmxIgW3adaNO87vNCYYACjM3J_Iiio",
    authDomain: "kwitter-fa35e.firebaseapp.com",
    databaseURL: "https://kwitter-fa35e-default-rtdb.firebaseio.com",
    projectId: "kwitter-fa35e",
    storageBucket: "kwitter-fa35e.appspot.com",
    messagingSenderId: "343678662363",
    appId: "1:343678662363:web:85fdd8d7401472636dfefe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }