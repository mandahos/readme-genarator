// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
    if (license = "Apache") {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license = "MIT") {
         return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
     } else if (license = "ISC") {
         return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    
      } else (license === 'none')
      return 'No license provided';
    

    // renderLicenseBadge();
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '* [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
     if (license === 'Apache') {
    return `[Apache](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === 'MIT') {
    return `[MIT](https://choosealicense.com/licenses/mit/)`
  } else if (license === 'ISC') {
    return `[ISC](https://choosealicense.com/licenses/isc/)`
  } else (license === 'none') ; return ''

}
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
  Find me on Github: [mandahos](https://github.com/mandahos)
  No github? Email me: hoshor.manda@gmail.com

  This README. was created with ✨ by [readme-genarator](https://mandahos.github.io/readme-genarator/)
  `;
}

module.exports = generateMarkdown;