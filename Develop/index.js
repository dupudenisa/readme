const fs = require("fs");
const inquirer = require("inquirer");
const axios = require ("axios");

inquirer 
.prompt ([
 {
    message: "What is your Github username?",
    name: "username"
 },
 {
    message: "What is the project title?",
    name: "title"
},
{
    message: "What is a description of your project?",
    name: 'description'
},
{
    message: "What is in the table of contents?",
    name: "table "
},
{
    message: "What kind of installation do you have?",
    name: "installation"
},
{
    message: "What is the usage?",
    name: "usage"
},
{
    message: "What kind of license do you have?",
    name: "license"
},
{
    message:"What are your contributing factors?",
    name: "contributing"
},
{
    message: "What tests were run?",
    name: "tests"
}

])


.then(function({ response }) {
let template = `
 #Readmegenerator
* Username ${response.username} 
* Project title ${response.title}
* Description ${response.description}
* Table of Contents ${response.table}
* Installation ${response.installation}
* Usage ${response.usage}
* License ${response.license}
* Contributing ${response.contributing}
* Tests ${response.tests}
`;

})

.then(function({username,title,description,table,installation,usage,license,contributing,tests}) {
    const queryUrl = `https://api.github.com/users/${username}`;


axios 
    .get(queryUrl)
    .then(function({data}) {
        const email = data.email((repository) => repository.username)
    
        fs.writeFile("Readme", template, err => {
        if (err){
            throw err 
        
            }
        })
    });
    })






    

