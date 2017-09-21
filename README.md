# ubc-clf8

## Working with this repo

### Formatting Rules
**CSS Rules**
Ideally, the css output should be DRY, humanly-readable, and as shallow as possible (the aim is to never get more than 2 selectors deep). Basic BEM principles are used for class naming and structure. Rules are checked via the `grunt lint` command.

1. Do not style elements (ie. `footer`). The only exceptions to this are base link and typographic styles, however these should be declared once. Preference is always to use a class to modify defaults.
1. Do not style ids (ie. `#top`). Always default to classes with state or variant modifiers.
1. Do not use vendor prefixes. These are added via autoprefixer when the files are compiled.

**SCSS rules**

1. All souce files should be as modular and self-contained as possible.
1. Only use single-line comments `//` , **not** multi-line comments `/* */`. These are used to generate the sass doc files.
1. All variables used in a partial SCSS file should be locally-scoped at the beginning of the file. These can reference global variables as needed. (ie. `$my-component-color: $brand-color;`)

___
## Installing this repo

### 1. Prerequisite: Install Node.js
1. If node.js is not installed, https://docs.npmjs.com/getting-started/installing-node

### 2. Clone the repo and install dependencies
1. Make a local copy of the git repo (using github app, etc)
2. Using terminal or your cli, navigate to the repo. 
3. Run npm to install the necessary packages: 
    `npm install`

### 3. 
1. Run gulp: 
    `gulp`

## Usage
[insert additional gulp commands]
