// Assignment Code
var generateBtn = document.querySelector("#generate");

//  start to write here
// characters for passwords, all the lowers case, all the upercase, all the numbers, all the special characters
// set up the alert for password requirements 




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 