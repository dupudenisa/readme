const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

inquirer
    .prompt([
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
            message: "What are your contributing factors?",
            name: "contributing"
        },
        {
            message: "What tests were run?",
            name: "tests"
        }

    ]).then(function ({ username, title, description, table, installation, usage, license, contributing, tests }) {
        var queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function ({ data }) {
            console.log(data);
            
            const email = data.blog;
            /*
            if(email = null)
            {
                email = "dupudenisa@gmail.com";
            }
            */

            const photo = data.avatar_url;
            //data.email((repository) => repository.username);

            let template = `
            #Readmegenerator
            * Username ${username} 
            * Project title ${title}
            * Description ${description}
            * Table of Contents ${table}
            * Installation ${installation}
            * Usage ${usage}
            * License ${license}
            * Contributing ${contributing}
            * Tests ${tests}
            * Email ${email}
            * Photo ${photo}
            `;

            fs.writeFile("Readme", template, err => {
                if (err) {
                    throw err
                }
            })

        });

    })
