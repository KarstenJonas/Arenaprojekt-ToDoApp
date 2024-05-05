# ToDoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## json-server

Run `json-server --watch db.json` to start json server

```mermaid
gantt
    title Projektplan
    dateFormat  YYYY-MM-DD
    axisFormat %d-%m

    section Todos
    Prozedur zum Anlegen von todos programmieren     : 2024-04-29, 1d
    GUI Elemente zum Anzeigen eines todos programmieren : 2024-04-29, 3d
    Prozedur zum Anzeigen von todos programmieren     : 2024-04-30, 2d
    Prozedur zum Editieren von todos programmieren    : 2024-05-02, 1d
    Prozedur zum Löschen von todos programmieren      : 2024-05-02, 1d

    navbar (Sidebar) programmieren                    : 2024-05-02, 1d

    section Filter
    Gui Elemente für Filter erstellen                 : 2024-05-03, 1d
    Prozedur für Filter programmieren                 : 2024-05-03, 2d

    section Charts
    Grafische Darstellung für Piechart erstellen      : 2024-05-13, 2d
    Prozedur für Piechart programmieren               : 2024-05-14, 2d
    Grafische Darstellung für Barchart erstellen      : 2024-05-15, 1d
    Prozedur für Barchart programmieren               : 2024-05-16, 1d

    section Abschluss
    Demo auf Github bereitstellen                     : 2024-05-17, 1d
    Entwicklertests                                   : 2024-05-17, 1d

```