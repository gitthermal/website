---
title: Contribution guide
description:
titleBorder: true
---

We want contributing to Thermal to be fun, enjoyable, and educational for anyone and everyone. All contributions are welcome, including issues, new docs as well as updates and tweaks, blog posts, workshops, and more.

This project is a labor of love, and we appreciate all of the users that catch bugs, make performance improvements, and help with documentation. Every contribution is meaningful, so thank you for participating. That being said, here are a few guidelines that we ask you to follow so we can successfully address your issue.

## Not sure how to start contributing?

If you are worried or don’t know where to start, check out the [issues list](http://github.com/gitthermal/thermal/issues/). Issues labeled [help wanted](https://github.com/gitthermal/thermal/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) are good issues to submit a PR for. Issues labeled [good first issue](https://github.com/gitthermal/thermal/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) are great candidates to pick up if you are in the code for the first time. If you are contributing significant changes, please discuss with the assignee of the issue first before starting to work on the issue.

You can also read out to Yashu Mittal on Discord `Yashu Mittal#1475`.

## Prerequisites

You'll need the following tools to download and build Code locally:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org), version `>=10`
- [Yarn](https://yarnpkg.com)

## Build and Run

If you want to understand how Code works or want to debug an issue, you'll want to, get the source, [setup the development environment](/docs/development-environment), build it, and run the tool locally.

### Getting the sources

First, fork the Thermal repository so that you can make a pull request. Then, clone your fork locally:

```sh
git clone https://github.com/<<<your-github-account>>>/thermal.git
cd thermal
yarn
```

### Linting

We use ESLint for linting our sources. You can run eslint across the sources by running the script command `yarn lint`.

## Work Branches

Even if you have push rights on the [gitthermal/thermal](https://github.com/gitthermal/thermal) repository, you should create a personal fork and create feature branches there when you need them. This keeps the main repository clean and your personal workflow cruft out of sight.

## Pull Requests

To enable us to quickly review and accept your pull requests, always create one pull request per issue and [link the issue in the pull request](https://github.com/blog/957-introducing-issue-mentions). Never merge multiple requests in one unless they have the same root cause. Be sure to follow our Coding Guidelines _(still work in progress 😅)_ and keep code changes as small as possible. Avoid pure formatting changes to code that has not been modified otherwise. Pull requests should contain [tests](https://github.com/gitthermal/thermal/issues/26) whenever possible.

## Suggestions

We're also interested in your feedback for the future of Code. You can submit a suggestion or feature request through the issue tracker. To make this process more effective, we're asking that these include more information to help define them more clearly.

## Discussion Etiquette

In order to keep the conversation clear and transparent, please limit discussion to English and keep things on topic with the issue. Be considerate to others and try to be courteous and professional at all times.
