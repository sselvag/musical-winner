// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT','APACHE 2.0', 'GPL 3.0','BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'testing',
    message: 'What command should be run to run tests?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  }
];


// TODO: Create a function to write README file
function writeToFile(response) {
  const fileName = `${response.title.toLowerCase().split(' ').join('')}.md`;
  fs.writeFile(`./generatedReadMe/${fileName}`, generateMarkdown(response), (err) => err ? console.log(err) : console.log('Success!'))
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(promptUser)
  .then((response) => {
      writeToFile(response);
  })
};

// Function call to initialize app
init();
