let un=document.getElementById("email");
let pass=document.getElementById("password");
let add=document.getElementById("address");
let gd=document.getElementById("graduation");
let branch=document.getElementById("branch");
let yop=document.getElementById("yop");

function registerUser(){
	let userdata={
		username:un.value,
		password:pass.value,
		address:add.value,
		graduation:gd.value,
		branch:branch.value,
		yop:yop.value
	}
	saveData(userdata);
	clearFeild();
	open("Login.html");
}

function clearFeild(){
	un.value="";
	pass.value="";
	add.value="";
	gd.value="";
	branch.value="";
	yop.value="";

}
function saveData(userData){
	localStorage.setItem("userInfo",userData);
}