// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license = "Apache") renderLicenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    else if (license = "MIT") renderLicenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    else if (license = "ISC") renderLicenseBadge ="[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    else (license = "") ; "No license provided"

    renderLicenseBadge();
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ##Description
  ${data.description}

  📚## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Licenses](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Instllation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  👥${data.contribution}
  
  ## Test
  🧪${data.test}

  ## Questions
  ❓${data.questions}
  Find me on Github: [${data.username}](https://github.com${data.username})
  No github? Email me: ${data.email}

  This README. was created with ✨ by [readme-genarator](https://mandahos.github.io/readme-genarator/)
  `;
}

module.exports = generateMarkdown;