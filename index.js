//modules

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdowns");


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
            type: 'list',
            message: "What license did you use if any?",
            name: 'license', 
           choices: [
              "Apache",
              "MIT",
              "ISC",
              "none"              
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
            message: "Any questions, please feel free to reachout at hoshor.manda@gmail or GitHub: Mandahos",
            name: 'questions',
        },
       
    ]);
}


const writeFileAsync = util.promisify(fs.writeFile);

 async function init() {
     try {
         const data = await promptUser();
         console.log("Responses:", data);

        //  const generateInput = generateMarkdown(data);
        //  console.log(markdown);

        //  await writeFileAsync('./utils/README.', generateInput);
         await writeFileAsync('./utils/README.md', generateMarkdown(data));
     }
     catch(errors) {
        console.log(errors)

     }
 }
 init();

