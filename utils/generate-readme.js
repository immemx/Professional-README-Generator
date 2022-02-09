const fs = require('fs');

// Write File functions for passing in all captured information and file content, creating the file, and sending it into the dist folder.
const writeFile = fileContent => {
    //
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there is an error, reject the promise and send the error to the promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of function here to make sure the Promise doesn't accidently execute the resolve() function as well
                return;
            }

            // if everything went well resolve the prmoise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'ReadMe Created!'
            });
        });
    });
}

// exporting writeFile function
module.exports = { writeFile };