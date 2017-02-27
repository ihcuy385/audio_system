<template>
    <div id="app">
	<h2>Audio Request</h2>
	<label>user name</label>
	<input id="postUser" type="text">
	<br/>

	<label>content</label>
	<textarea id="postContent" type="text"></textarea>
	
	<br/>
	<p>{{ message }}</p>
	<button type="submit" id="postSmtBtn" v-on:click="submitOK">submit</button>
    </div>
</template>

<script src="https://www.gstatic.com/firebasejs/3.6.10/firebase.js"></script>
<script src="db.js"></script>
<script>
	var db = new Vue({
		el: "#db",
		data:{
			message: "You have not submitted yet."
		},
		methods:{
			submitOK: function(){
				this.message = "submit success!"
				$("postContent").val("");
			}
		}
	})
</script>
