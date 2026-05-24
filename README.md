# JavaScript Concepts Guide

A structured, educational JavaScript project that separates key language concepts into individual module files. Each topic file contains explanations, examples, and console output to demonstrate core JavaScript behavior.

## Project Overview

This repository is designed as a clean reference for important JavaScript concepts, including:

- Execution Context
- Closures
- Encapsulation
- `this` keyword behavior
- Lexical Scope
- Dynamic Scope
- ES5 vs ES6 function differences

## Files

- `index.html` - Simple HTML page that loads the main script module.
- `index.js` - Main entry point that imports each topic file as an ES module.
- `executionContext.js` - Explains JavaScript execution context, memory phase, and execution phase.
- `closures.js` - Demonstrates closures and how inner functions remember outer variables.
- `encapsulation.js` - Shows encapsulation examples using private variables and exposed methods.
- `thisKeyword.js` - Covers the `this` keyword in global scope, functions, object methods, event listeners, arrow functions, and classes.
- `lexicalScope.js` - Explains lexical scope and the scope chain.
- `dynamicScope.js` - Covers dynamic scope behavior and how `this` can change based on call context.
- `es5VsEs6Functions.js` - Compares ES5 functions and ES6 arrow functions.

## How to Run

1. Open `index.html` in a modern browser.
2. Open the browser console to view the output from each concept module.

Alternatively, if you have a local server available, serve the folder and visit the page in the browser to avoid module loading restrictions.

## What You Will Learn

- How JavaScript creates execution contexts and processes code in two phases.
- Why closures allow inner functions to access outer function variables even after the outer function ends.
- How encapsulation can hide internal state while exposing safe operations.
- The different meanings of `this` depending on call context and function type.
- How lexical scope is determined by code structure, not runtime call order.
- Why JavaScript is lexically scoped and how dynamic scope-like behavior appears through `this`.
- The key differences between ES5 function declarations and ES6 arrow functions.

## Notes

- `index.js` is loaded as a module to enable the use of separate ES module files.
- All example code prints information to the console for easy review.
