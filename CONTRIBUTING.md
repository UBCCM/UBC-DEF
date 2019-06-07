# Contributing
Thank you to support our work. We've put together the following documents for you to start contribution to UBC-DEF.

If you have questions towards UBC-DEF, feel free to reach out to [UBC Brand and Marketing](https://brand.ubc.ca/support/contact-us/).

## Table of Content

- [UBC Brand Identity Elements and Policy 94](#ubc-brand-identity-elements-and-policy-94)
- User Stories / Guiding Principle

### Contributors
1. Review
    - [Code of Conduct](#code-of-conduct)
    - [Coding Styleguide](#coding-styleguide)
	- [License](#license)
    - Testing and Linting
    - [Browser Support](#browser-support)
2. [Submitting issues](#submitting-issues)
3. [Issue a Pull Request](#pull-requests)
    - [Developer Certificate of Origin](#developer-certificate-of-origin)
    - [Git Commit](#git-commit-messages)
    - [Workflow](#workflow)

### Maintainers
- Application Tasks
- Changelog and Documentation
- Deploying and Publishing

## UBC Brand Identity Elements and Policy 94
The use of UBC's Brand Identity Elements are protected by Policy #94
- [UBC Brand Visual Identity Guideline](http://assets.brand.ubc.ca/downloads/ubc_visual_identity_guide.pdf)
- [Policy 94](https://universitycounsel.ubc.ca/files/2011/10/policy94.pdf) 

## Code of Conduct
- Please review our [Code of Conduct](/CODE_OF_CONDUCT.md) before contribution to learn about our community standards.

## License
- UBC-DEF is licensed under the [MIT License](/LICENSE)

## Coding Styleguide
- Please review our [coding styleguide](https://github.com/UBCCM/guides) for coding convention to follow
- Lint rules are set to follow the coding style guide.

## Browser Support
- Any contribution will need to work with the following browsers.
- We aim to support all below browsers based on browsers usage greater than 1.5%*

| Operating system | Browser                                
|----------------- |----------------------------------------
| Windows          | Internet Explorer 11                   
| Windows          | Edge (latest 2 versions)               
| Windows          | Google Chrome (latest 2 versions)      
| Windows          | Mozilla Firefox (latest 2 versions)    
| macOS            | Safari (latest 2 versions)                            
| macOS            | Google Chrome (latest 2 versions)      
| macOS            | Mozilla Firefox (latest 2 versions)    
| iOS              | Safari for iOS (latest 2 versions)                    
| iOS              | Google Chrome (latest 2 versions)      
| Android          | Google Chrome (latest 2 versions)      
| Android          | Samsung Internet (latest 2 versions)   
| Android          | UC Browser (latest 2 versions)         

*Browsers with > 1.5% usage based on [Can I use browser usage table](https://caniuse.com/usage-table).


## Submitting Issues

* Avoid submitting related issue 
    * Perform a [cursory search](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+repo%3Aubccm%2Fubc-def) before reporting an issue.
    * [Create new issue](https://github.com/ubccm/ubc-clf8/issues) only if it has not been reported.
* Provide as much detail as possible on the issue
    * Issue 
    * For title, be as descriptive as possible.
    * In description, explaining at the high level what it is about, and should be written in the same style as [Git commit messages](#git-commit-messages).
    * If reporting a bug, clearly describe the issue including steps to reproduce. 
    * When submitting a browser bug, please include the browser, version, operating system, and operating system version.
    * Include screenshots whenever possible to help visualize the issue.
* Create pull request **ONLY** after receiving feedback on issue.
    * Do not open a [pull request](#pull-requests) to resolve an issue without first receiving feedback from a `owner` or `maintainer` and having them agree on a solution forward.
* Use task lists to track sub-items
    * Issues that have a number of sub-items that need to be complete should use [task lists](https://github.com/blog/1375%0A-task-lists-in-gfm-issues-pulls-comments) to track the sub-items in the main issue comment.

## Pull Requests

* **PULL REQUEST WITHOUT FIRST [SUBMITTING AN ISSUE](#submitting-issues) WILL BE CLOSED**
* **ALL PULL REQUESTS MUST INCLUDE A [DEVELOPER CERTIFICATE OF ORIGIN](#developer-certificate-of-origin)**
* [Submit an issue first](#submitting-issues)
    * Pull requests should only be created on related issues and after receiving feedback from `owner` or `maintainer`.
    * If the pull request closes an issue, [please reference its closing from a commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/).
    * Pull requests not referencing any issues will be closed.
* Be descriptive
    * Pull request titles should be descriptive, explaining at the high level what it is doing, and should be written in the same style as [Git commit messages](#git-commit-messages).
    * Pull requests should include tests describing and codifying their functionality.
* Formatting
    * Check for unnecessary whitespace with `git diff --check` before committing.
    * Ensure that [EditorConfig](http://editorconfig.org/) installed in the editor used to work on the site and that it is functioning properly.
    * Do not squash or rebase commits when submitting a Pull Request. It makes it much harder to follow work and make incremental changes.
* Branches
    * Always checkout `master` to get latest changes.
    * Create a new branch with descriptive name and referencing the reviewed issue.
    *


### Developer Certificate of Origin

All contributions to ubc-clf8 must be accompanied by acknowledgment of, and agreement to, the [Developer Certificate of Origin](http://elinux.org/Developer_Certificate_Of_Origin), reproduced below. Acknowledgment of and agreement to the Developer Certificate of Origin _must_ be included in the comment section of each contribution and _must_ take the form of `DCO 1.1 Signed-off-by: {{Full Name}} <{{email address}}>` (without the `{}`). Contributions without this acknowledgment will be required to add it before being accepted. If a contributor is unable or unwilling to agree to the Developer Certificate of Origin, their contribution will not be included.

```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
660 York Street, Suite 102,
San Francisco, CA 94110 USA

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

### Git Commit Messages

* Use the present tense (`"ADD feature"` not `"ADDED Feature"`)
* Use the imperative mood (`"Move cursor to…"` not `"Moves cursor to…"`)
* Limit the first line to 72 characters or less


## Deploying and Publishing
### Publishing


## References

* sass-lint: https://github.com/sasstools/sass-lint/blob/develop/CONTRIBUTING.md
* puppet: https://github.com/puppetlabs/puppet/blob/master/CONTRIBUTING.md
* alphagov: https://github.com/alphagov/govuk-frontend/blob/master/CONTRIBUTING.md
