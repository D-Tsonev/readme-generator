// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  {data.installation}

  ## Usage
  ${data.usage}

  ## License
  ## License
  ${data.license && data.license.length > 0 ? data.license.join(', ') : 'None'}


  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: ${data.email}  
`;
}

module.exports = generateMarkdown;
