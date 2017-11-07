# Reference Domain Api Implementation
This solution serves as a reference implementation of a domain api written in [Node.js](https://nodejs.org/). The repository can be forked and used as a starting implementation for Api's written in node that must be hosted as [Azure Functions](https://azure.microsoft.com/en-us/services/functions/) as well as On-Prem as [Docker](https://www.docker.com/)containers.

# Tools and Libraries
## Required
* [Node.js](https://nodejs.org/)
* [Docker (latest)](https://www.docker.com/)
* [Azure Function Core Tools](https://github.com/Azure/azure-functions-cli)

## Optional
* [VS Code](https://code.visualstudio.com/)

# Conversion steps
* Rename the domainApi folder to the correct domain name
    * Rename 'require' instances that point to this folder, including 'features/step_definitions/api.js'
    * Fix configuration.js routes to point to the new folder name
* Update package.json
* Change the domain name in the configuration.js file
* Update the readme to reflect only information that is necessary for the new API

## If the new API does not have an existing VSTS repository
Clone the ref-domain repository
> git clone {RepositoryUri}

## If the new API has an existing VSTS git repository
Add the ref-domain-api git as a remote
> git remote add ref-domain-remote {RepositoryUri}
> git fetch ref-domain-remote

Merge with the ref-domain branch
> git merge remotes/ref-domain-remote/master --allow-unrelated-histories

Or you could rebase instead
> git rebase remotes-ref-domain-remote/master --allow-unrelated-histories

# Building and Debugging

## With Docker
### Building
docker build --tag domain-node-api .

### Running 
docker run -it --rm --publish 8080:8080 --name running-domain-node-api domain-node-api

### Debugging with VSCode
TODO: Add Instructions for debugging with VSCode

### Cleaning up after Docker
##### TODO: Update with docker container and image commands.
#### Containers
A specific container
> docker rm ID_or_Name

All exited containers
> docker rm $(docker ps -a -f status=exited -q)

#### Images
A specific image
> docker rmi Image

Dangling images
> docker rmi $(docker images -f dangling=true -q)

More information can be found at https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes.

## As an Azure Function
### Building
Install the packages using npm
> npm install

### Running as an Azure Function
The start the function locally use the run option
> func run domainApi

### Debugging with VSCode
Start the function locally using the run option with the debug flag
> func run domainApi --debug

Alternatively, you can run the following
> func host start --debug vscode

For either option, then go to the Debug tab in VSCode. Start debugging using the "Attach to Azure Function" debug configuration

# Contributing 

# Testing
## Unit Tests
Unit tests are written BDD-style using [Cucumber.js](https://github.com/cucumber/cucumber-js). Tests are located in the /features folder. To run the tests...
> .\node_modules\.bin\cucumberjs tests\unit\features

# ESLint
This project has [ESLint](https://eslint.org/docs/user-guide/getting-started) installed locally. Run the following command from the project root directory
> .\node_modules\.bin\eslint .\

This will run eslint on the entire project. To specify a specific directory or file, replace ".\" with the file or directory in question. 
ESLint settings are configurable through the .eslintrc.json file. 

## Mandatory File Updates
### readme.md
Add any relevant steps to build, run and debug the solution as well as tool specific information required to build, run and debug the solution.

### .dockerignore

[.dockerignore reference](https://docs.docker.com/engine/reference/builder/#dockerignore-file)

### Architecture Decision Record (adr)
Document any relevant architecture decisions made or superceded as a result of the contribution.

[adr-tool](https://github.com/npryce/adr-tools)

### Swagger file
[Swagger](https://swagger.io/) (a.k.a. OpenAPI) is a documentation tool used for APIs. Update the Swagger file in the .doc/swagger directory to reflect changes to APIs. 