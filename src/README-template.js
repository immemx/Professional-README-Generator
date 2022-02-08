

// Create function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const {} = templateData;

    return `
    # ${projectTitle}

    ${description}

    ## Table of Contents

    1. [Installation](#installation) 
    2. [Usage](#usage)
    3. [Contribution Guidlines](#contribution guidelines)
    4. [Test Instructions](#test instructions)
    5. [License](#license)

    ## Installation

    ${install}

    ## Usage

    ${usage}

    ## Contribution Guidelines

    ${contribution}

    ## Test Instructions

    ${test}

    ## License

    ${license}


    `;
};