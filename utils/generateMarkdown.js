function generateMarkdown(data) {
  return `
# ${data.login}
# README GENERATOR - please input your project title

This is where you input your project description

\`\`\`;
  This is your table of contents
\`\`\`\


## Installation

This is where you will discuss the installation of the deployed application

## Usage

This is where you will discuss the usage of the deployed application

## License 

This is where you will discuss the usage of the deployed application

## Contributing  

This is where you will discuss the usage of the deployed application
* Functional, deployed application.

## Tests  

* this is where you discuss your forms of testing 

* this is where you discuss your forms of testing 

## Questions  

Any questions, you can contact me here: 

* email: ${data.email}

* Github profile picture: 
<br>
![interface](${data.avatar_url}) 

- - -
© All Rights Reserved.
`;
}

module.exports = generateMarkdown;

//creates the file and writes the file
