# Eoics Open Hack Night Angular 2 introduction

## Setup your A2 Dev environment

Install node.js. for your platform https://nodejs.org/en/download/
Node installs also node package manager aka NPM

Install Angular CLI A command line interface for Angular: https://cli.angular.io/ 
```
npm install -g angular-cli
```
## Add a some of libraries
Add styling magic. Install bootstrap. https://v4-alpha.getbootstrap.com/
```
npm install bootstrap@4.0.0-alpha.6 -S
```
Add FontAwesome, a font icons library. http://fontawesome.io/
```
npm install  font-awesome -S
```
`npm install [package] -S` is short for `npm install [package] --save` 

For more info check: https://docs.npmjs.com/cli/install

## Add two new pages
Use ng.cli to add two new components - people and about. These components are going to become new pages.
```
ng g component pages/people
```
```
ng g component pages/about
```

Ng-cli will update the import statements and the `@NgModule` decorator function. Check it after the commands finish. 

Handy isn't it!

Add menu items for the newly added pages by extending the `RouterModule` in `app.module.ts` with two new objects:
When you finish `RouterModule.forRoot()` function call should look like below.
```
RouterModule.forRoot(
  [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'people',
      component: PeopleComponent
    },
    {
      path: 'about',
      component: AboutComponent
    }
  ]
)
```


## Ng-Cli help 

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
