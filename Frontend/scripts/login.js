console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const signupform = document.getElementById("signupbtn");
const loginform = document.getElementById("loginbtn");

let url = "https://audiobook-19h7.onrender.com"

signupform.addEventListener("click",()=>{

	let data = {
		name : document.getElementById("Name").value,
		email : document.getElementById("Email").value,
		password : document.getElementById("Password").value,
	}
	// console.log(data)

	fetch(`${url}/user/register`,{
		method : "POST",
		headers :{
			"Content-Type" : "application/json"
		},
		body:JSON.stringify(data)
	}).then(res => res.json())
	.then(data => {
		console.log(data)
		alert(data.message)
	})
	.catch(err => console.log(err))

	document.getElementById("Name").value = ""
	document.getElementById("Email").value = ""
	document.getElementById("Password").value = ""
})


loginform.addEventListener("click",()=>{

	let data = {
	
		email : document.getElementById("loginEmail").value,
		password : document.getElementById("loginPass").value,
	}
	// console.log(data)

	fetch(`${url}/user/login`,{
		method : "POST",
		headers :{
			"Content-Type" : "application/json"
		},
		body:JSON.stringify(data)
	}).then(res => res.json())
	.then(data => {
		localStorage.setItem("token",data.token)
		console.log(data)
		alert(data.message)
		window.location.href = "http://127.0.0.1:5500/Frontend/html/home.html"
	})
	.catch(err => console.log(err))

	
	document.getElementById("loginEmail").value = ""
	document.getElementById("loginPass").value = ""
})


loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});
