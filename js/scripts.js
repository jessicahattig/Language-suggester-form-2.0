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
} 