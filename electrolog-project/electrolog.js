
//open login popup window:
var popupMessage1= document.getElementById('login-popup');
function loginButton() {
    popupMessage1.style.display='grid';
}

//open sign-up popup window:
var popupMessage2= document.getElementById('signUp-popup');
function signUpButton() {
    popupMessage2.style.display='grid';
}

// open categories of menu
var dropdown = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}