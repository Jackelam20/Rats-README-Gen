// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input


const questions = [{
  type: "input",
  message:`Title:
"What would you like to title your readme?\n`,
  name: "title",
},{
  type: "input",
  message:`Title:
"What is your descption?\n`,
  name: "Decsription",
},{
  type: "input",
  message:`Title:
"How do you use it?\n`,
  name: "Usage",
},{
  type: "input",
  message:`Title:
"What function are in the project?\n`,
  name: "Funtctions",
},{
  type: "input",
  message:`Title:
"Did anyone help you with this project?\n`,
  name: "colabs",
}];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
 }
 

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });

}

// Function call to initialize app
init(writeToFile);

