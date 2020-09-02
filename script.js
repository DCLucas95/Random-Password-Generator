// Assignment Code
var generateBtn = document.querySelector("#generate");

//prompt for password length
function generatePassword() {
  var confirmLength = (prompt('How many characters would you like to have in your password? (Password must be between 8 and 128 characters)'));

  //password too short or too long
  while (confirmLength < 8 || confirmLength > 128) {
    alert("Password must be between 8 and 128 characters");
    var confirmLength = (prompt('How many characters would should your password be?'))
  }

  var allowedCharacters = []

  //variables for password selection
  var confirmednumericCharacters = confirm("Click ok to add numbers to your password");
  var confirmeduppercasedCharacters = confirm("Click ok to add upper case letters to your password");
  var confirmedlowerCasesCharacters = confirm("Click ok to add lower case letters to your password");
  var confirmedspecialCharacters = confirm("Click ok to add special characters to your password");

  //loop for no selections
  while (confirmednumericCharacters == false && confirmeduppercasedCharacters == false && confirmeduppercasedCharacters == false && confirmedspecialCharacters == false) {
    alert("You must select at least one option")
    var confirmLength = (prompt('How many characters would you like to have in your password? (Password must be between 8 and 128 characters)'));
    var confirmednumericCharacters = confirm("Click ok to add numbers to your password");
    var confirmeduppercasedCharacters = confirm("Click ok to add upper case letters to your password");
    var confirmedlowerCasesCharacters = confirm("Click ok to add lower case letters to your password");
    var confirmedspecialCharacters = confirm("Click ok to add special characters to your password");
  }

  //selections
  if (confirmednumericCharacters == true) {
    allowedCharacters = allowedCharacters.concat(numericCharacters)
  }
  //else {}

  if (confirmeduppercasedCharacters == true) {
    allowedCharacters = allowedCharacters.concat(upperCasedCharacters)
  }
  //else {}

  if (confirmedlowerCasesCharacters == true) {
    allowedCharacters = allowedCharacters.concat(lowerCasedCharacters)
  }
  //else{}

  if (confirmedspecialCharacters == true) {
    allowedCharacters = allowedCharacters.concat(specialCharacters)
  }
  //else{}

  console.log(allowedCharacters)

  var password = '';

  //randomise selection and output password
  for (i = 0; i < confirmLength - 1; i++) {
    var randomcharacterindex = (Math.floor(Math.random() * allowedCharacters.length));

    password += allowedCharacters[randomcharacterindex];
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);