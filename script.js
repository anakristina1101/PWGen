// referenced various YouTube video

var alpaBet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "1234567890";
var special = "!@#$%^&*+=";

var alphaNum = document.getElementById("alphaNum");
var numBox = document.getElementById("nums");
var specialBox = document.getElementById("special");
var submit = document.getElementById("submit");
var newPw = document.getElementById("newPass");

submit.addEventListener("click", function(a1) {
  var letters = alpaBet;

  if (numBox.check) {
    letters += nums;
    //  block of code to be executed if the condition is true
  } else {
    ("");
    //  block of code to be executed if the condition is false
  }
  if (specialBox.checked) {
    letters += special;
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }
  newPw.value = password(alphaNum.value, letters);
});

function password(l, letters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return pwd;
}

// get generated pass and copy to clip board

document.getElementById("lastNums").innerHTML += password + "<br/>";
