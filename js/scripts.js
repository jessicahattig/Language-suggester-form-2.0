
const JavaScript = "JavaScript! JavaScript is one main facet technology of the World Wide Web, alongside HTML and CSS."
const Python = "Python! Python was designed to emphasize code readability. It supports multiple programming paradigms, including structured, object-oriented and functional programming."
const Ruby = "Ruby! Ruby is an advance programming language which supports multiple programming paradigms. In Ruby, everything is an object, including primitive data types. "


function result(event) {
  let finalResult = document.getElementById("bigreveal"); 
  finalResult.removeAttribute("class")
  event.preventDefault();


const firstAnswer = document.getElementById("firstInput").value;
const secondAnswer = document.getElementById("secondInput").value;
const thirdAnswer = document.getElementById("thirdInput").value;
const fourthAnswer = document.getElementById("fourthInput").value;
const fifthAnswer = document.getElementById("fifthInput").value;

let result;
if (firstAnswer === "Yes"){
  result= Ruby;
} else if (secondAnswer==="Yes"){
  result = Python;
} else if (thirdAnswer==="Yes"){
  result= JavaScript;
} else if (fourthAnswer==="Yes"){
  result=Ruby;
} else if (fifthAnswer==="Yes"){
  result = Ruby;
} else if (firstAnswer==="No"){
  result=Python;
} else if (secondAnswer==="No"){
  result = JavaScript;
} else if (thirdAnswer==="No"){
  result= Python;
} else if (fourthAnswer==="No"){
  result = JavaScript;
} else {
  result=JavaScript;
}

document.getElementById("result").innerText =result;
}

window.addEventListener("load", function(){
  const form = document.getElementById("form")
  form.addEventListener("submit",result)
});
