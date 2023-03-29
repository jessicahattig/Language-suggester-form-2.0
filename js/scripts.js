window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const someInput = document.getElementById("some-input").value;
  };
};