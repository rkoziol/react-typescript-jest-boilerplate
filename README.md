# React | Typescript | Jest | Cypress - application boilerplate

It's a template for React application with Typescript, Jest library and other stuff that can be helpful for you - feel free to use it!

- [React | Typescript | Jest | Cypress - application boilerplate](#react--typescript--jest--cypress---application-boilerplate)
    - [Instalation steps](#instalation-steps)
    - [Available scripts](#available-scripts)
    - [Technology stack](#technology-stack)
    - [Useful information](#useful-information)

<a name="instalation" />

### Instalation steps

1. Clone this repository to destination folder.

`git clone https://github.com/rkoziol/react-typescript-jest-boilerplate.git`

2. Install dependencies.

`npm install`

3. Run local environment.

`npm start`

<a name="scripts" />

### Available scripts

`npm start` - run development server with hot reload mode,

`npm build` - build distributon package,

`npm run lint` - run lints,

`npm run lint:code` - run lint for typescript / javascript files,

`npm run lint:code:fix` - run lint for typescript / javascript files with auto fix option,

`npm run lint:style` - run lint for style files,

`npm run lint:style:fix` - run lint for style files with auto fix option,

`npm run test:jest` - run Jest tests,

`npm run test:jest:watch` - run Jest tests with watch mode,

`npm run test:jest:coverage` - run Jest tests and generate coverage report,

`npm run test:cypress` - run Cypress tests in terminal,

`npm run test:cypress:open` - open Cypress application.

<a name="technology" />

### Technology stack

|   | Name | Version | Docs |
|-------|-----------------|-------------|------|
| <img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" width='30'> | Typescript | 5.5.4 | <https://www.typescriptlang.org/>
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width='30'> | React | 18.3.1 | <https://reactjs.org/>
| <img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" width='30'> | React Router Dom | 6.25.1 | <https://v5.reactrouter.com/web/guides/quick-start>
| <img src="https://iconape.com/wp-content/png_logo_vector/jest-logo.png" width='30'> | Jest | 29.7.0 | <https://jestjs.io/>
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png" width='30'> | Cypress | 13.13.1 | <https://www.cypress.io/>
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" width='30'> | Sass | 1.77.8 | <https://sass-lang.com/>
| <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" width='30'> | Webpack | 5.93.0 | <https://webpack.js.org/>
| <img src="https://cdn.worldvectorlogo.com/logos/eslint.svg" width='30'> | ESLint | 8.57.0 | <https://eslint.org/>
| <img src="https://prettier.io/icon.png" width='30'> | Prettier | 3.3.3 | https://prettier.io/
| <img src="https://media.istockphoto.com/vectors/cute-brown-siberian-husky-dog-sitting-cartoon-icon-vector-vector-id1238710824?k=20&m=1238710824&s=170667a&w=0&h=m4N_3us1MDDnMa-mWIGxyrYvgd9FRq0A67ziTCy7ZZw=" width='30'> | Husky | 9.1.4 | <https://github.com/typicode/husky>

<a name="information" />

### Useful information

I focused on separate logic from presentation layer of component, so components are created according to this scheme:

- **index.tsx** - main file with component declaration. You can put here a React Hooks features (eg.: useState, useEffects etc.), prepare component props, do some base logic etc. This file should return component view layer with component props set.
- **Component.tsx** - file with view layer of component.
- **Component.scss** - file with component style declaration.
- **handlers.ts** - file where You can place useful function for component.

Before You commit or push something on repository, Husky will run code lints and tests.
The configuration files are in the main project folder.
