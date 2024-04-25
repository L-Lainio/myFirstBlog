function darkFunction() {
	var element = document.body;
	element.classList.toggle("light-dark");
}

// store
//localStorage.setItem("userName", "title", "content");
let blogArr = JSON.parse(localStorage.getItem("blogs")) || [];

// Retrieve

function validateForm(event){
	event.preventDefault()
	const userName = document.querySelector("#username").value;
	const title = document.querySelector("#title").value;
	const content = document.querySelector("#content").value;

	if(!userName || !title || !content){
		alert("Please enter all values");
		return;
	}

	const userInput = {
		username: userName,
		title: title,
		content: content
	}

	//const userBlog = JSON.parse(localStorage.getItem("user"));
	//console.log(userData);

	blogArr.push(userInput);

	localStorage.setItem("blogs", JSON.stringify(blogArr));
	window.location.href ='./blog.html'
}

document.getElementById("blogForm").addEventListener("submit", validateForm);



/*let button = document.getElementById('button');
let output = document.getElementById('output');

if (localStorage.getItem('someKey') === 'someValue') {
  output.classList.add('some-class');
};*/
