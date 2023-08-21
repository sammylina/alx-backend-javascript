#!/usr/bin/env node

const fs = require('fs')

function countStudents(file_name) {

  let content;
  try {
    content = fs.readFileSync(file_name).toString().split('\n')
  } catch(e) {
    throw new Error('Cannot load the database');
  }
  content = content.slice(1, content.length - 1)
  console.log(`Number of students: ${content.length}`)

  const obj = {}

  for (let std of content) {
    const [fname, lname, age, field] = std.split(',')
    if (!(field in obj)) {
      obj[field] = {
        count: 0,
        stds: []
      }
    } 
    obj[field].count += 1
    obj[field].stds.push(fname)
  }
    
  for (let field in obj) {
    console.log(`Number of students in ${field}: ${obj[field].count}. List: ${obj[field].stds.join(", ")}`)
  }

}

module.exports = countStudents;
