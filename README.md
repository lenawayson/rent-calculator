## Rapid Prototyping Workshop Instructions:
1. Clone the repository. `git clone https://gitlab.com/lenawayson/angular-tailwind-starter.git`
2. `cd angular-tailwind-starter/`
3. `npm install`
4. `npm run dev`
5. Go to localhost:1236
6. Make a change to the HTML in `src/app/app.component.html` and save file
7. Go to localhost:1236 and see your changes! Hooray!
8. In the directory where you have installed ngrok, run `ngrok http 1236` and navigate to the link it provides.
9. Change the git repository to your own. Create a repo in github or gitlab, grab that link, and run `git remote set-url origin [NEW REMOTE URL]`

Notes:
- Pushing to master will fail. Don't forget to update the remote url to continue your work!




# AngularStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
