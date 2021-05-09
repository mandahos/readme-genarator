//modules
const inquirer = require('inquirer');
const fs = require('fs');
const {message} = require('status')

//generate questions
inquirer.prompt (
    [
        {
            type: 'input',
            message="What's the project title?",
            name: 'title',
            validate: (value) =>{if(value){return ture} else {return 'please enter your README. specs'}},
        },
        {
            type: 'input',
            message="What's the project title?",
            name: 'title',
            validate: (value) =>{if(value){return ture} else {return 'please enter your README. specs'}},
        }    
    ]

)