## Submitting Issues

* Avoid submitting related issue 
    * Perform a [cursory search](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+user%3Aubccm) before reporting an issue.
    * [Create new issue](https://github.com/ubccm/ubc-clf8/issues) only if it has not been reported.
* Provide as much detail as possible on the issue
    * For title, be as descriptive as possible.
    * In description, explaining at the high level what it is about, and should be written in the same style as [Git commit messages](#git-commit-messages).
    * If reporting a bug, clearly describe the issue including steps to reproduce. 
    * When submitting a browser bug, please include the browser, version, operating system, and operating system version.
    * Include screenshots whenever possible to help visualize the issue.
* Create pull request **ONLY** after receiving feedback on issue.
    * Do not open a [pull request](#pull-requests) to resolve an issue without first receiving feedback from a `collaborator` or `owner` and having them agree on a solution forward.
* Use task lists to track sub-items
    * Issues that have a number of sub-items that need to be complete should use [task lists](https://github.com/blog/1375%0A-task-lists-in-gfm-issues-pulls-comments) to track the sub-items in the main issue comment.

## Pull Requests

* **DO NOT ISSUE A PULL REQUEST WITHOUT FIRST [SUBMITTING AN ISSUE](#submitting-issues)**
* **ALL PULL REQUESTS MUST INCLUDE A [DEVELOPER CERTIFICATE OF ORIGIN](#developer-certificate-of-origin)**
* [Submit an issue first](#submitting-issues)
    * Pull requests should only be created on related issues and after receiving feedback from `owner` or `collaborator`.
    * If the pull request closes an issue, [please reference its closing from a commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/).
    * Pull requests not referencing any issues will be closed.
* Be descriptive
    * Pull request titles should be descriptive, explaining at the high level what it is doing, and should be written in the same style as [Git commit messages](#git-commit-messages).
    * Pull requests should include tests describing and codifying their functionality.
* Formatting
    * Check for unnecessary whitespace with `git diff --check` before committing.
    * Ensure that [EditorConfig](http://editorconfig.org/) installed in the editor used to work on the site and that it is functioning properly.
    * Do not squash or rebase commits when submitting a Pull Request. It makes it much harder to follow work and make incremental changes.

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

### References

* sass-lint: https://github.com/sasstools/sass-lint/blob/develop/CONTRIBUTING.md
* puppet: https://github.com/puppetlabs/puppet/blob/master/CONTRIBUTING.md