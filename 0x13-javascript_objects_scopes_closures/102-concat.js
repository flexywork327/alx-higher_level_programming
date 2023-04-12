#!/usr/bin/node

const fs = require('fs');

// Read the command-line arguments
const sourceFile1 = process.argv[2];
const sourceFile2 = process.argv[3];
const destinationFile = process.argv[4];

// Open the first source file and read its contents
fs.readFile(sourceFile1, 'utf8', function (err, data1) {
  if (err) {
    return console.log(err);
  }

  // Open the second source file and read its contents
  fs.readFile(sourceFile2, 'utf8', function (err, data2) {
    if (err) {
      return console.log(err);
    }

    // Concatenate the contents of the two source files
    const concatenatedData = data1 + data2;

    // Write the concatenated data to the destination file
    fs.writeFile(destinationFile, concatenatedData, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log(`Successfully concatenated ${sourceFile1} and ${sourceFile2} into ${destinationFile}.`);
    });
  });
});
