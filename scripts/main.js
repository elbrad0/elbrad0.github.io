// Image + text switcher code

const myImage = document.querySelector("img");
const myHeading = document.querySelector("h2");


myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/BbPic1.jpg") {
		myImage.setAttribute("src", "images/BbPic2.jpg");
		myHeading.textContent = "Hello world!";
	} else {
		myImage.setAttribute("src", "images/BbPic1.jpg");
		myHeading.textContent = "This is a top level heading";
	}
};

// Personalized welcome message code

let myButton = document.querySelector('button');
let myOtherHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myOtherHeading.innerHTML = 'Hello, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myOtherHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

