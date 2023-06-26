#!/usr/bin/env node

export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];
  for (const value of array) {
    updatedArray.push(appendString + value);
  }

  return updatedArray;
}
