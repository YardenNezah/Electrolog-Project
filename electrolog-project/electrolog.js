var popupMessage1= document.getElementById('login-popup');
var popupMessage2= document.getElementById('signUp-popup');

//open login popup window:
function loginButton() {
    popupMessage1.style.display='grid';
    popupMessage2.style.display='none';
}

//open sign-up popup window:
function signUpButton() {
    popupMessage2.style.display='grid';
    popupMessage1.style.display='none';
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