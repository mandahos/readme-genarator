//modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const genReadme = require("./utils/generateMarkdowns");
const generateMarkdown = require('./utils/generateMarkdowns');
const writeFileAsync = util.promisify(fs.writeFile);

//generate questions
function promptUser() {
 return inquirer.prompt(
    [
        {
            type: 'input',
            message="What's the project title?",
            name: 'title',
            
        },
        {
            type: 'input',
            message="Description of Project?",
            name: 'description',
            
        },
        {
            type: 'input',
            message="What was used to Build Project",
            name: 'built-with',
            
        },
        {
            type: 'input',
            message="What's the project website link?",
            name: 'website-link',
           
        },
        {
            type: 'input',
            message="Who made the project?",
            name: 'contribution',
            
        }
    ]);
}
 async function init() {
     try {
         const answers = await promptUser();
         const genarateInput = generateMarkdown(answers);
         await writeFileAsync('', generateMarkdown);
     }
     catch(errors) {

     }
 }
 init();

