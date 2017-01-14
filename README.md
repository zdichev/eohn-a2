# Eoics Open Hack Night Angular 2 introduction

## Setup your A2 Dev environment

Install node.js. for your platform https://nodejs.org/en/download/
Node installs also node package manager aka NPM

Install Angular CLI A command line interface for Angular https://cli.angular.io/ 
```$xslt
npm install -g angular-cli
```
## Add a couple of libraries
Install ui elements that we are going to use later. http://valor-software.com/ng2-bootstrap/#/
```$xslt
npm install ng2-bootstrap -S
```
This ui elements need styling. Install bootstrap. https://v4-alpha.getbootstrap.com/
```$xslt
npm install bootstrap@4.0.0-alpha.6 -S
```
`npm install [package] -S` is short for `npm install [package] --save`

Form more info check: https://docs.npmjs.com/cli/install


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
