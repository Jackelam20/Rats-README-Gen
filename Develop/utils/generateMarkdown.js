// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  }
  if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  }
  if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
  }
  if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === "MIT") {
  return "(https://opensource.org/licenses/MIT)";}
if (license === "Apache 2.0") {
  return "(https://opensource.org/licenses/Apache-2.0)";}
if (license === "GPL 3.0") {
  return "(https://www.gnu.org/licenses/gpl-3.0)";}
if (license === "BSD 3") {
  return "(https://opensource.org/licenses/BSD-3-Clause)";}
if (license === "None") {
  return "";}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === "MIT") {
    return "This project is licensed under the MIT license.";
  }
  if (license === "Apache 2.0") {
    return "This project is licensed under the Apache 2.0 license.";
  }
  if (license === "GPL 3.0") {
    return "This project is licensed under the GPL 3.0 license.";
  }
  if (license === "BSD 3") {
    return "This project is licensed under the BSD 3 license.";
  }
  if (license === "None") {
    return "";
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
 
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.table}
  #installation
  ${data.installation}
  #usage
  ${data.usage}
  #credits
  ${data.credits}
  #license
 ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}`

}

module.exports = generateMarkdown;
