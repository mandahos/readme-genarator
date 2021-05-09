//modules
const inquirer = require('inquirer');
const fs = require('fs');
const {message} = require('status')

//generate questions
function writeToFile(fileName, data) {
inquirer.prompt(
    [
        {
            type: 'input',
            message="What's the project title?",
            name: 'title',
            validate: (value) =>{if(value){return ture} else {return 'please enter your README. specs'}},
        },
        {
            type: 'input',
            message="Description of Project?",
            name: 'description',
            validate: (value) =>{if(value){return ture} else {return 'please enter your README. specs'}},
        },
        {
            type: 'input',
            message="What was used to Build Project",
            name: 'built-with',
            validate: (value) =>{if(value){return ture} else {return 'please enter your README. specs'}},
        },
        {
            type: 'input',
            message="What's the project website link?",
            name: 'website-link',
            validate: (value) =>{if(value){return ture} else {return 'please enter your README. specs'}},
        },
        {
            type: 'input',
            message="Who made the project?",
            name: 'contribution',
            validate: (value) =>{if(value){return ture} else {return 'please enter your README. specs'}},
        },
    ]  
)
};

