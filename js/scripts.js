//Business Logic - languages output 
const JavaScript = "JavaScript!"
const Python = "Python!"
const Ruby = "Ruby!"

// Getting the value from each question input.
const firstAnswer = document.getElementById("firstInput").value;
const secondAnswer = document.getElementById("secondInput").value;
const thirdAnswer = document.getElementById("thirdInput").value;
const fourthAnswer = document.getElementById("fourthInput").value;
const fifthAnswer = document.getElementById("fifthInput").value;

//function
function result(event) {
  let finalResult = document.getElementById("finalResult"); 
  finalResult.removeAttribute("class")
  event.preventDefault();
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
  result = Javascript;
} else if (fifthAnswer==="No"){
  result=JavaScript;
}

document.getElementById("finalResult").innerText = " ";
}