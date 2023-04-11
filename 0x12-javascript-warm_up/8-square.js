#!/usr/bin/node
const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (!Number.isInteger(size)) {
  console.log('Missing size');
} else {
  const matrix = Array(size).fill().map(() => Array(size).fill('X'));
  matrix.forEach(row => console.log(row.join('')));
};

