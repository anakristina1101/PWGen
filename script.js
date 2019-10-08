// referenced various YouTube video

var alpaBet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "1234567890";
var special = "!@#$%^&*+=";

var alphaNum = document.getElementById("alphaNum");
var numBox = document.getElementById("nums");
var specialBox = document.getElementById("special");
var submit = document.getElementById("submit");
var newPw = document.getElementById("newPass");
var copy = document.getElementById("copy");
var inputValue = document.getElementById("generatedPass").value;

submit.addEventListener("click", function(a1) {
  var letters = alpaBet;
  var numLimit = 10;
  console.log("i clied here");
  document.getElementById("generatedPass").value = passwordGenerated(
    numLimit,
    letters
  );
});

function passwordGenerated(numLimit, letters) {
  var pwd = "";
  for (var i = 0; i < numLimit; i++) {
    pwd += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  console.log("pwd; ", pwd);
  console.log(numLimit, letters);

  return pwd;
}

// get generated pass and copy to clip board
copy.addEventListener("click", function(a2) {
  console.log(document.getElementById("lastNums"));
  document.getElementById("lastNums").innerHTML = document.getElementById(
    "generatedPass"
  ).value;
});
