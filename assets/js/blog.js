/* @format */

function darkFunction() {
	var element = document.body;
	element.classList.toggle("light-dark");
}

// retrieves saved blogs from local storage
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// display blogs in a table
const blogContainer = document.getElementById("blogsContainer");
const table = document.createElement("table");

blogs.forEach((blog) => {
	const article= document.createElement('article');
	article.classList.add('blog-article');
	const h2 = document.createElement('h2');
	h2.textContent = blog.title;

	const p = document.createElement("p");
	p.textContent = blog.content;

	const puName = document.createElement('p');
	puName.textContent = "Posted by: "+blog.username;

	article.append(h2, p, puName);
	blogContainer.appendChild(article);

});


// function handleForm(){

// 	const userName = document.querySelector("#username").value;
// 	const title = document.querySelector("#title").value;
// 	const content = document.querySelector("#content").value;

// 	const userData = {
// 		username: userName,
// 		title: title,
// 		content: content
// 	}

// 	let blogArr = JSON.parse(localStorage.getItem('blogs')) || [];

// 	blogArr.push(userData);

// 	localStorage.setItem("blogs", JSON.stringify(blogArr));
// }
