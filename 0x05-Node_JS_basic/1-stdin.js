#!/usr/bin/env node

process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, What is your name?\n');
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data) {
    console.log(`Your name is: ${data}`);
  }
  // process.exit(0)
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
});
