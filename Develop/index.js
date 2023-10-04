const inquirer = require("inquirer");
const { generateMarkdown, fetchLicense, fetchLicenseNames } = require("./utils/generateMarkdown");
const fs = require("fs");

// Fetch license names and generate questions for user input
fetchLicenseNames()
  .then((licenses) => {
    const licenseChoices = licenses.concat(["None"]);
    const questions = [
      {
        type: "input",
        message: "What is your title?\n",
        name: "title"
      },
      {
        type: "input",
        message: "What is your description?\n",
        name: "description"
      },{
        type: "input",
        message: "What is your installation?\n",
        name: "installation"
      },{
        type: "input",
        message: "How do you use it?\n",
        name: "usage"
      },{
        type: "input",
        message: "What functions are in the project?\n",
        name: "functions"
      },{
        type: "input",
        message: "Did anyone help you with this project?\n",
        name: "collabs"
      },
      {type: "list",
        message: "What license are you using?\n",
        name: "license",
        choices: licenseChoices
      },
      {
        type: "input",
        message: "What is your email?\n",
        name: "questions"
      },
      {
        type: "input",
        message: "What is your username?\n",
        name: "username"
      }
    ];

    function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("README file has been created");
        }
      });
    }

    function init() {
      inquirer.prompt(questions).then((answers) => {
        console.log("answers:", answers);
        fetchLicense(answers.license)
          .then((licenseData) => {
            console.log("License Data:", licenseData);
            answers.licenseData = licenseData;
            return generateMarkdown(answers);
          })
          .then((markdown) => {
            writeToFile("README.md", markdown);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    }

    // Function call to initialize app
    init();
  })
  .catch((error) => {
    console.error("Error fetching license names:", error);
  });


