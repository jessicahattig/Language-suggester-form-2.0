window.onload = function() {
  console.log("Script executing!");
  // Event handler for the form submissions
  let languageForm = document.querySelector("languageForm");
  languageForm.onsubmit = function(event) {
    event.preventDefault();
    

  // Getting the value from each form input.
    const firstInput = document.getElementById("firstInput").value;
    const secondInput = document.getElementById("secondInput").value;
    const thirdInput = document.getElementById("thirdInput").value;
    const forthInput = document.getElementById("fourthInput").value;
    const fifthInput = document.getElementById("fifthInput").value;

  };
};

  // Hidding results before form is submitted
  