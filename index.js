//  usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// Calling for inquirer NPM and assinging it
const inquirer = require('inquirer');
const { measureMemory } = require('vm');

// Function used to prompt users questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your Project Title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Title!')
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a description of your project? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a valid description!')
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!')
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!')
                }
            }
        },
        {
            type: 'input',
            name: "contribution",
            message: "What are the contribution guidelines? (Required)",
            validate: guideInput => {
                if (guideInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!')
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions? (Required)',
            validate: guideInput => {
                if (guideInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!')
                }
            }
        }
    ])
}

promptUser()