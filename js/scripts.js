
const JavaScript = "JavaScript!"
const Python = "Python!"
const Ruby = "Ruby!"


function result(event) {
  let finalResult = document.getElementById("bigreveal"); 
  finalResult.removeAttribute("class")
  event.preventDefault(); // first thing that happens

// variables from users after the first thing happens.("firstInput").value;
const firstAnswer = document.getElementById("firstInput").value;
const secondAnswer = document.getElementById("secondInput").value;
const thirdAnswer = document.getElementById("thirdInput").value;
const fourthAnswer = document.getElementById("fourthInput").value;
const fifthAnswer = document.getElementById("fifthInput").value;

//branching logic for results, boolean style
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

//UI Logic - in order to have buisness logic displayed, need to call on UI logic to load. (This is how user input is grabbed.)
window.addEventListener("load", function(){
  const form = document.getElementById("form")
  form.addEventListener("submit",result)
})