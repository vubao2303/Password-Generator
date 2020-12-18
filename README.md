# Password Generator

This profect focused on building a responsive and interactive website that  generate a password for user 

## Site Picture
![Site](./assets/password-generator-picture.png)

# Table of contents 
[Tittle](#Password-Generator)

[Site Picutre](#Site-picture)

[Description of Page Building ](#Description-of-Page-Building )

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Deployed Link](#Deployed-Link)

[Author](#Author)

[License](#License)

## Description of Page Building 
* 
* 

## Acceptance Criteria (to be commented out)

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
  


## Code Snippet
Apply condition statement if and else to to perform different actions for different iput 
```javascript
if (8 > passwordLength || passwordLength > 128) {
      alert ("Please choose between number 8 to 128")
  } 
  else { generatePassword () 
  }
```
Apply objects, keys, properties, and method to list out character choices 
```javascript
charactersChoices = {
  lowerCase:[], upperCase:[], number[], specialCharacters
}

```

Use Math.random function to generate a random password that includes user's criteria choices 
```javascript
 for (var i = 0; i < passwordLength; i++) {
      passWordResult += charactersBase[Math.floor(Math.random() * charactersBase.length)]
    }
    return passWordResult

```
Use function to display password result in the answer box 

```javascript

 function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
```
    

## Technologies Used
- HTML - used to create elements on the DOM
  * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS - styles html elements on page
  * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- Javascript - gives interacticve elements to web pages
  * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Bootstrap - design and customize responsive site
  * [Bootstrap](https://getbootstrap.com/)
- Git - version control system to track changes to source code
   * [Git](https://git-scm.com/)
- GitHub - hosts repository that can be deployed to GitHub Pages
  * [Github](https://github.com/)
  

## Deployed Link

* [See Live Site](#)


## Author

* **B Tram Vu** 

- [Link to Portfolio Site](#)
- [Link to Github](https://github.com/vubao2303/Password-Generator)
- [Link to LinkedIn](https://www.linkedin.com/in/tram-vu-866250121/)

## License

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


