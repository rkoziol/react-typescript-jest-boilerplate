# React | Typescript | Jest - application boilerplate

It's a template for React application with Typescript, Jest library and other stuff that can be helpful for you - feel free to use it!

- [React | Typescript | Jest - application boilerplate](#react--typescript--jest---application-boilerplate)
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

`npm run lint:style` - run lint for style files,

`npm test` - run tests,

`npm run test:watch` - run tests with watch mode,

`npm run test:coverage` - run tests and generate coverage report.

<a name="technology" />

### Technology stack

|   | Name | Version | Docs |
|-------|-----------------|-------------|------|
| <img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" width='30'> | Typescript | 4.6.3 | <https://www.typescriptlang.org/>
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width='30'> | React | 18.0.0 | <https://reactjs.org/>
| <img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" width='30'> | React Router Dom | 6.3.0 | <https://v5.reactrouter.com/web/guides/quick-start>
| <img src="https://iconape.com/wp-content/png_logo_vector/jest-logo.png" width='30'> | Jest | 27.5.1 | <https://jestjs.io/>
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" width='30'> | Sass | 1.50.0 | <https://sass-lang.com/>
| <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" width='30'> | Webpack | 5.72.0 | <https://webpack.js.org/>
| <img src="https://cdn.worldvectorlogo.com/logos/eslint.svg" width='30'> | ESLint | 7.32.0 | <https://eslint.org/>
| <img src="<https://prettier.io/>icon.png" width='30'> | Prettier | 2.6.2 | https://prettier.io/
| <img src="https://media.istockphoto.com/vectors/cute-brown-siberian-husky-dog-sitting-cartoon-icon-vector-vector-id1238710824?k=20&m=1238710824&s=170667a&w=0&h=m4N_3us1MDDnMa-mWIGxyrYvgd9FRq0A67ziTCy7ZZw=" width='30'> | Husky | 7.0.4 | <https://github.com/typicode/husky>

<a name="information" />

### Useful information

I focused on separate logic from presentation layer of component, so components are created according to this scheme:

- **index.tsx** - main file with component declaration. You can put here a React Hooks features (eg.: useState, useEffects etc.), prepare component props, do some base logic etc. This file should return component view layer with component props set.
- **Component.tsx** - file with view layer of component.
- **Component.scss** - file with component style declaration.
- **handlers.ts** - file where You can place useful function for component.

Before You commit or push something on repository, Husky will run code lints and tests.
The configuration files are in the main project folder.
