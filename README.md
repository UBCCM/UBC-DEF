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
2. Using terminal or your CLI, navigate inside the repo directory. 
3. Install the necessary packages: 
    `npm install`.

### 3. Run gulp
1. Run gulp: 
    `gulp`.

## Description
There are three gulp tasks kicked off every time `gulp` is run: `styles`, `minify` and `watch`. You can find out more about these in the [Tasks](#tasks) section.

The other optional tasks are
1. lint
2. sassdoc
3. styles
4. minify (also runs `styles`)
5. watch (same as `gulp`. Runs `styles`, `minify` and `watch`.)

### Tasks

#### styles
`styles` compiles all of the SASS stylesheets referenced in `src/sass/MAIN.sass` and saves it as a single CSS file, `dist/css/ubcclf.css` along with the map file for debugging. 

#### minify
`minify` resaves a condensed, less legible version of `dist/css/ubcclf.css` as `dist/css/ubcclf.min.css`. This is done to reduce file size.

#### watch
The `watch` task scans any file chages made to the SASS. Whenever a change occurs, the styles are compiled again.

#### [lint](https://www.npmjs.com/package/gulp-sass-lint)
`lint` scans the SASS files for specific formatting and property order, acting as a built in style guide for CSS code. When run, all directories within the `src/sass` directory are scanned for these rules. If a warning occurs, the files will still be compiled. The only exception to this is the files in `src/sass/vendor`.

If an error does occur, the final CSS file will not be compiled. All rules are defined in `config/.sass-lint.yml`.

#### [sassdoc](https://www.npmjs.com/package/sassdoc)
`sassdoc` scans all SASS within the `src/sass` directory and generates a document listing all styles, variables, mixins and functions. Specifically formatted comments `///` provide additional details. You can read more about the comment syntax [on their official site](http://sassdoc.com/getting-started/).
