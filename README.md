# Password Generator

This profect focused on building a responsive and interactive website that  generate a random password for user. Password resutl must meet client's acceptance criteria such as: password length is  at least 8 characters and no more than 128 characters, users have the choice of upper case, lower case, numbers, and/or special characters. Handling input errors with alerts and conditional fucntion to ensure the most password generator  

## Site Picture
![Site](./assets/password-generator-picture.png)

# Table of Contents 
[Tittle](#Password-Generator)

[Site Picutre](#Site-picture)

[Table of Contents](#Table-of-Content)

[Description of Page Building ](#Description-of-Page-Building)

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Deployed Link](#Deployed-Link)

[Author](#Author)

[License](#License)

## Description of Page Building 
* Build a pseudocode to develope a general idea of what do we need, why do we need it, and how to we tackle the task
* Use provided code and add a javascript files to it to make the page function
* Link html files with javascript files 
* Create names for variables that hold different values 
* Provide promps and alerts for user input
  <ul> Acceptance Criteria
  <li> Length: 8-128 characters </li>
  <li> Character choices: lower case, uppercase, numbers, and/or special characters </li>
  </ul> 
* Construct conditional staments to perfom different actions for different input 
  If user input does not meet acceptance ariteria, provide alert for user to choose again 
* Use funciton generate password and math.random to generate passwords randomly
  Password result should meet user's choice of lenght and character choices 
* Display password result in card body 
* Click generate password button to start again 


## Code Snippet
Apply conditional statement if and else to to perform different actions for different iput 
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
  lowerCase:[], upperCase:[], number:[], specialCharacters:[]
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

* [See Live Site](https://vubao2303.github.io/Password-Generator/)


## Author

* **B Tram Vu** 

- [Link to Portfolio Site](https://github.com/vubao2303)
- [Link to Github](https://github.com/vubao2303/Password-Generator)
- [Link to LinkedIn](https://www.linkedin.com/in/tram-vu-866250121/)

## License

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


