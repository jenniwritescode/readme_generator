// declare node modules and local modules needed
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

inquirer
  .prompt([
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
      type: "input",
      message: "Provide usage guidelines:",
      name: "usage",
      default() {
        return "non-business use only";
      },
    },
    {
      type: "input",
      message: "Provide contribution guidelines:",
      name: "contribute",
      default() {
        return "branch off development and create a pull request";
      },
    },
    {
      type: "checkbox",
      message: "What license should be applied?",
      name: "license",
      choices: [
        "Apache license 2.0",
        "Creative Commons license family",
        "MIT",
        "Do What The F*ck You Want To Public License",
      ],
    },
  ])
  .then(function writeFile(answers) {
    let markdown = generate(answers);
    fs.writeFile("myREADME.md", markdown, (err) =>
      err ? console.log(err) : console.log("success"))
  })
  .catch((error) => {
    console.log(error);
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something else went wrong.");
    }
  });
