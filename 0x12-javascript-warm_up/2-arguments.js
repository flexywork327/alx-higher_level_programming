#!/usr/bin/node
// script that prints a message depending of the number of arguments passed
// You must use console.log(...) to print all output

if (arg.length === 0) {
  console.log('No argument');
} else if (arg.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
