![eonics](http://eonics.nl/wp-content/uploads/2015/11/Eonics-logo-header-website4.jpg)
# Open Hack Night Angular 2 Introduction


## Setup your A2 Dev environment

1. Install node.js. for your platform https://nodejs.org/en/download/
Node installs also node package manager aka NPM. You guessed it! That NPM is the program that manages our apps dependencies. So we only need the manifest file `package.json`.

2. Install Angular CLI A command line interface for Angular: https://cli.angular.io/ 
    ```
    npm install -g angular-cli
    ```
3. Clone this repo Duuuh

4. Get into the folder and run `npm install`. That will instal the whole project with its dependencies

5. First let's add some styling magic. Install bootstrap. https://v4-alpha.getbootstrap.com/
    ```
    npm install bootstrap@4.0.0-alpha.6 -S
    ```
    We are getting the newest bootstrap with all its goodies.

6. Let's add some font icons - FontAwesome is great for the job. http://fontawesome.io/
    ```
    npm install  font-awesome -S
    ```
    `npm install [package] -S` is short for `npm install [package] --save` 

    For more info check: https://docs.npmjs.com/cli/install

    > Actually I wired the application in that way that it relies on the packages we just installed. Because of time limitation i had to do some plumbing work on my own. Don't worry if you have some questions I will be around to satisfy your curiosity.

7. Lets add two new pages to our client

    We'll use ng-cli to add two new components - people and about. These components are going to become new pages.
    ```
    ng g component pages/people
    ```
    ```
    ng g component pages/about
    ```

    Ng-cli will update the import statements and the `@NgModule` decorator function to ensure that the components become part of our application. Check it after the commands finish. 

    Handy isn't it!
8. Let's add some menu item to point to our freshly added pages. We can do that by extending the `RouterModule` in `app.module.ts` with two new objects:
    When you finish `RouterModule.forRoot()` function call should look like this:
    ```ts
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
    
    
9. We have completely wired, styled and back-end communication enabled application. Volia !
10. Do something on your own.  Don't forget to have FUN !

  ![Best paty eva](https://cdn.meme.am/cache/instances/folder44/66743044.jpg)

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
