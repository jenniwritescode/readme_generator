// declare node modules and local modules needed
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "gitname",
        default() {
          return "gitusername";
        },
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        default() {
          return "gituser@email.com";
        },
      },
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default() {
          return "My Project Title";
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project:",
        default() {
          return "Project description";
        },
      },
      {
        type: "input",
        message: "Provide installation instructions:",
        name: "install",
        default() {
          return "npm i";
        },
      },
      {
        type: "checkbox",
        message: "What license should be applied?",
        name: "license",
        choices: [ "Apache license 2.0", "Creative Commons license family", "MIT", "Do What The F*ck You Want To Public License" ],
      },
];

function askQuestions(questions) {
    inquirer
  .prompt(questions)
  .then((answers) => {
      const { gitusername, email, title, description, install, license } = answers;
      console.log(answers);
      return answers;
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something else went wrong.");
    }
  });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("writing to file");
}

// TODO: Create a function to initialize app
function init() {
    askQuestions(questions);
    // writeToFile("myMarkdown.md", answers);
    // let licenseBadge = generateMarkdown.renderLicenseBadge(answers.license);
    // let licenseLink = generateMarkdown.renderLicenseLink(answers.license);
    // let licenseSec = generateMarkdown.renderLicenseSection(answers.license);

}

// Function call to initialize app
init();
