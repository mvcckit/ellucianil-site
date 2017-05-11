![Logo](https://github.com/eric-harms/ellucianil-site/blob/master/doc/img/logo.png?raw=true)

* [Annotated Source](https://cdn.rawgit.com/eric-harms/miner/master/doc/docco/miner.full.html)

# ellucianil-site

The official Ellucian IL website.

## Installation

Before building this project, you must install and configure the following dependencies on your machine.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)
* [Grunt](https://gruntjs.com/)

### Building

Once the dependencies are installed, clone the source code repository and use grunt to build it.

	git clone https://github.com/eric-harms/ellucianil-site.git
	cd ellucianil-site
	yarn install
	grunt

## Updating

The website's content is driven by Markdown and JSON. Do not make unnecessary changes to the HTML.

| Item             | File                       |
| ---------------- | -------------------------- |
| College name     | `models\settings.js`       |
| Registration URL | `models\settings.js`       |
| Directions URL   | `models\settings.js`       |
| Date             | `collections\about.json`   |
| Times            | `collections\about.json`   |
| Location         | `collections\about.json`   |
| Cost             | `collections\about.json`   |
| Agenda           | `collections\agenda.json`  |
| Vendors          | `collections\vendors.json` |
| Sessions         | `markdown\sessions.md`     |

## Contributing

We've set up a separate document for our [contribution guidelines](CONTRIBUTING.md).

