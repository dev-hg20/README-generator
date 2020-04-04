const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

function init() {
  inquirer
    .prompt({
      message: "Please enter your Github username:",
      name: "username"
    })
    .then(function({ username }) {
      api.getUser(username).then(function(res) {
        let textContent = generateMarkdown(res.data);
        fs.writeFile("README.md", textContent, function(err) {
          if (err) throw err;
          console.log("NEW FILE MADE NOW :) ");
        });
      });
    });
}

init();
