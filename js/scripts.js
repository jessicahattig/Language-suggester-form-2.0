// Variables - languages
const JavaScript = "JavaScript!"
const Python = "Python!"
const Ruby = "Ruby!"

// Getting the value from each question input.
const firstInput = document.getElementById("firstInput").value;
const secondInput = document.getElementById("secondInput").value;
const thirdInput = document.getElementById("thirdInput").value;
const fourthInput = document.getElementById("fourthInput").value;
const fifthInput = document.getElementById("fifthInput").value;

//function
function result(event) {
  let finalResult = document.getElementById("finalResult"); 
  finalResult.removeAttribute("class")
  event.preventDefault();
} 