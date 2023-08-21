#!/usr/bin/env node

const {spawn, exec} = require('child_process')


process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, What is your name?\n')
process.stdin.on('readable', function() {
  const data = process.stdin.read()
  if (data) {
    process.stdout.write(`Your name is: ${data}` )
  }
  //process.exit(0)
})

process.stdin.on('end', function() {
  process.stdout.write("This important software is now closing\n")
})
