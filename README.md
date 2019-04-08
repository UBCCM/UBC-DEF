[![Known Vulnerabilities](https://snyk.io/test/github/UBCCM/ubc-def/badge.svg)](https://snyk.io/test/github/UBCCM/ubc-def) [![Build Status](https://travis-ci.org/UBCCM/UBC-DEF.svg?branch=dev)](https://travis-ci.org/UBCCM/UBC-DEF)

# UBC Digital Experience Framework (UBCDEF)
### What is this?
This is [insert description here]

### Do I have to install anything?
Yes, see [Getting Started](#getting-started) below.

### Who is it for?
It's for front-end developers who need a modern, minimal, unbiased framework for building out their digital projects. 

## Getting Started
### 1. Install Node.js and gulp 
1. In your terminal or CLI (command line interface) check if node.js is installed by running:
	`node -v`.
2. If node.js is not installed, please see the [instructions for installing node](https://docs.npmjs.com/getting-started/installing-node). Once complete, confirm node.js and npm are installed by running:
	`node -v` and `npm -v`.

### 2. Clone the repo and install dependencies
1. Make a local copy of the git repo (via download, clone or the official [Github App](https://desktop.github.com).
2. Using your CLI, navigate inside the repo directory. 
3. Install the necessary packages: 
	`npm install`.

### 3. Run gulp
1. Run gulp: 
	`gulp`.
4. To compile production-ready assets, Run gulp deploy.
	`gulp deploy`.


## Description
There are three gulp tasks kicked off every time `gulp` is run: `styles`, `javascript` and `images`.

The other optional tasks are
1. serverstart (Starts a simple server listening at port 8888.)
2. serverstop (Stops the server from listening at port 8888.)
3. watch (Watches for changes to SCSS and JS files in the `src` directory and recompiles them.)
4. utilities (Generates utility classes and puts them into separate files in the `build/css/utilities` directory.)
5. lint (Checks CSS / SCSS formatting in the `src` directory for adherence to the coding standards defined in `config/.sass-lint.yml`.)
6. styles (Compiles the SCSS in the `src` directory and outputs the result to the `build/css` and `tests/css` directories.)
7. images (Optimizes images in the `src` directory and outputs the result to the `build/img`, `dist/img` and `tests/img` directories.)
8. minify (Optimizes CSS in the `build/css` directory and outputs the result to the `dist/css` and `tests/css` directories.)
9. build (runs the `javascript`, `images`, `styles`, and `minify` tasks.)
10. deploy (runs the `javascript`, `images`, `styles`, `minify` and `lint` tasks.)
