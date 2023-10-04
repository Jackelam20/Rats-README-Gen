  function fetchLicense(licenseName) {
  const url = `https://api.github.com/licenses/${licenseName}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const licenseData = {
        name: data.name,
        badge: data.spdx_id,
        link: data.html_url,
      };
      return licenseData;
    })
    .catch((error) => {
      console.error("Error fetching license data:", error);
      return "";
    });
  }

  function fetchLicenseNames() {
  const url = "https://api.github.com/licenses";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const licenseNames = data.map((license) => license.key);
      return licenseNames;
    })
    .catch((error) => {
      console.error("Error fetching license names:", error);
      return [];
    });
  }

  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(licenseData) {
  if (licenseData && licenseData.badge) {
    return `![License](https://img.shields.io/badge/License-${licenseData.badge}-blue.svg)`;
  } else {
    return "";
  }
  }


  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string

  function renderLicenseLink(licenseData) {
  if (licenseData && licenseData.link) {
    return licenseData.link;
  } else {
    return "";
  }
  }


  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string


  function renderLicenseSection(licenseData) {
    if (licenseData && licenseData.name) {
      return `## License\n\nThis project is licensed under the [${licenseData.name}](${licenseData.link}) license.`;
    } else {
      return "";
    }
  }
  function generateGithubUrl(username) {
  return `https://github.com/$(username)`;}
  // TODO: Create a function to generate markdown for README

  function generateMarkdown(data) {
    const licensePromise = fetchLicense(data.license);
  return licensePromise.then((licenseData) => {
    const licenseBadge = renderLicenseBadge(licenseData);
    const licenseLink = renderLicenseLink(licenseData);
    const licenseSection = renderLicenseSection(licenseData);

  return `# ${data.title}

  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)


  #installation
  ${data.installation}

  #usage
  ${data.usage}

  #collabs
  ${data.collabs}

  ${licenseSection}
  ${licenseLink}

  #questions
  for question on the project please contact me at ${data.email} or 
  visit my github page at ${generateGithubUrl(data.username)}
  `;
  });
};



  module.exports = { generateMarkdown,fetchLicense, fetchLicenseNames,};
