//modules

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdowns");
const writeFileAsync = util.promisify(fs.writeFile);

//generate questions
function promptUser() {
 return inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
        },
        {
            type: 'input',
            message: "Description of Project?",
            name: 'description',  
        },
        {
            type: 'input',
            message: "Table of Contents:",
            name: 'table-contents',  
        },
        {
            type: 'input',
            message: "Anything installed to make it work?",
            name: 'install',  
        },
        {
            type: 'input',
            message: "How will the project be used",
            name: 'usage',  
        },
        {
            type: 'input',
            message: "What license did you use if any?",
            name: 'license', 
           choices: [
              "Apache",
              "MIT",
              "ISC"              
            ]
        },
        {
            type: 'input',
            message: "Who made the project?",
            name: 'contribution',  
        },
        {
            type: 'input',
            message: "Any tests included?",
            name: 'tests',
        },
        {
            type: 'input',
            message: "Any questions, please feel free to reachout",
            name: 'questions',
        },
       
    ]);
}
 async function init() {
     try {
         const data = await promptUser();
         const generateInput = generateMarkdown(data);
         await writeFileAsync('./utils/README.', generateInput);
         await writeFileAsync("./utils/license", license);
     }
     catch(errors) {

     }
 }
 init();

