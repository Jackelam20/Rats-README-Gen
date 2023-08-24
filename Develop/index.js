// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = ["repo name?", "description?", "installation?", "usage?", "license?" ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   const fileName = "README.md";
    const data = "generateMarkdown.js";
     addToFile(fileName, data);  
    console.log("README.md file created successfully!");
    

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
