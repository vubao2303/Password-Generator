// Assignment Code
var generateBtn = document.querySelector("#generate");

// let user input a lenght of the password by using prompt
function generatePassword () {
    var passwordLength = prompt ("How long would you like your password length to be? Please choose a length of at least 8 characters and no more than 128 characters.")
  // make sure that user input number 8 to 128 only 
  if (8 > passwordLength || passwordLength > 128) {
      alert ("please choose between number 8 to 128")
  } 

  // Choices for password 
  charactersChoices = {
    lowerCase:  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    
    number: ["0","1","2","3","4","5","6","7","8","9"], 
    
    specialCharacters: ["!", "@", "#", "$", "%", "$", "(",")", "\'", "'", "*", "+", ",","-",".","/",":",";", "< ", "=", ">",
      "?", "[", "]", "\ ", "^", "_", "`", "{", "|", "}", "~"]
  } 

  // 
  var charactersBase = []
  var lowerCase =
  confirm ("Would you like to include lower case?")
  if (lowerCase) {
    for (var i of charactersChoices.lowerCase) {
      charactersBase.push(i);
  }
  }
  console.log(charactersBase)


  var upperCase =
  confirm ("Would you like to include Uper case?")
  if (upperCase) {
    for (var i of charactersChoices.upperCase) {
      charactersBase.push(i);
  }
  }
  console.log(charactersBase)
  var number = 
  confirm ("Would you like to include numbers?")
  if (number) {
    for (var i of charactersChoices.number) {
      charactersBase.push(i);
  }
  }
  console.log(charactersBase)
  var specialCharacters =
  confirm ("Would you like to include special characters?")
  if (specialCharacters) {
    for (var i of charactersChoices.specialCharacters) {
      charactersBase.push(i);
  }
  }
  console.log(charactersBase)


  // generate a password using Math.random
  var j = "";
  // generate a password using Math.random
  for (var i = 0; i < passwordLength; i++) {
    j += charactersBase[Math.floor(Math.random() * charactersBase.length)]
  }

  return j;





  // // var userInput
  // // if (userInput === lowercase) || (userInput === upperCase) || (userInput === number) || (userInput ==== specialCharacters) {
  // //   return randomGenerator
  // // var randomGenerator = Math.floor(Math.random() * 120)}; 
  // // else alert ("please choose at least one of the requirement")
  // }



  //  start to write here
  // characters for passwords, all the lowers case, all the upercase, all the numbers, all the special characters
  // set up the alert for password requirements 



  }
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // // 
  // while (userInputLenght !== null) {
    
  //   userInputLenght = prompt ("How long would you like your password length to be? Please choose a length of at least 8 characters and no more than 128 characters.")
  //  if (userInputLenght === i) {
    
  //  }
  //  else if (userInputLenght === "") {
    
  //  }
  //  else if (userInputLenght === w) {
    
  //  }
  //  else if (userInputLenght === 
    
  //  }
  //  else {
    
  //  }

// }
