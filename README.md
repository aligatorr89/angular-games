# AngularGames

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

Deleted packages:

- jasmine
- karma
- protractor

Added packages:

- jest
- cypress
- @nguniversal/express-engine

## Server-side rendering

`npm run build:ssr && npm run serve:ssr`

It will run:

- ts-lint
- unit tests
- build the project
- run the server on localhost:4000

## e2e test

Made with [cypress](https://www.cypress.io/).

Run `npm run e2e`

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).


## Development server (SPA)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
