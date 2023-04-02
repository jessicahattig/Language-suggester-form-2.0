window.onload = function() {
  const languageForm = document.querySelector("languageForm");
  languageForm.onsubmit = function(event) {
    event.preventDefault();
  

    //event for when button is clicked
    languageForm.addEventListner('click',(event))






    let jsLang= document.getElementById("JavaScript");
    jsLang.setAttribute("class", "hidden");
    let pythonLang = document.getElementById("Python");
    pythonLang.setAttribute("class", "hidden");
    let rubyLang = document.getElementById("Ruby");
    rubyLang.setAttribute("class", "hidden");



    //Value for years experience
    const yearsExp = parseInt(document.querySelector("#firstInput"))
    if (yearsExp <=5){
      jsLang.removeAttribute ("class");
    }
  };
