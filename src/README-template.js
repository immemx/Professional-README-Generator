const fs = require('fs');

var generateReadme = (answers) => {
    return `
# ${answers.projectTitle}
    
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
    
## Description

${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.install}

## Usage

${answers.usage}

## License

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
This application is covered by the ${answers.license} license. 

## Contributing

${answers.contribution}

## Tests

${answers.test}

Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

Email me with any questions: ${answers.email}
`
  }
  
  module.exports = generateReadme;