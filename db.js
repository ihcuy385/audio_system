// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGcYPi_jjP4nWq0T0BFsJeJ3sotaVFuvI",
    authDomain: "audio-system.firebaseapp.com",
    databaseURL: "https://audio-system.firebaseio.com",
    storageBucket: "audio-system.appspot.com",
    messagingSenderId: "438293427908" 
};
firebase.initializeApp(config);
var database = firebase.database();

var postSmtBtn = document.getElementById("postSmtBtn");
var postContent = document.getElementById("postContent");
var postUser = document.getElementById("postUser");
postSmtBtn.addEventListener("click", function(){
	var postRef = firebase.database().ref('/posts/' + postUser.value);
	postRef.push().set({
		uid: postUser.value,
		content: postContent.value		
	}).then(function(){
		console.log("new post");
	}).catch(function(err){
		console.error("error:", err);
	})
})
