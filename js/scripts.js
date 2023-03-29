window.onload = function() {
  //event handler for form submission
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    //printing output
    event.preventDefault();
    const someInput = document.getElementById("some-input").value;
  };
};