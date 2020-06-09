# React | Typescript | Jest - application boilerplate

It's a template for React application with Typescript, Jest library and other stuff that can be helpful for You - feel free to use it!
 
1. [Instalation steps](#instalation) 
2. [Available scripts](#scripts)
3. [Technology stack](#technology)
4. [Useful information](#information)

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

- [React with Hooks](https://pl.reactjs.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Sass](https://sass-lang.com/)
- [Webpack](https://webpack.js.org/)
- [Husky](https://github.com/typicode/husky)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

<a name="information" />

### Useful information

I focused on separate logic from presentation layer of component, so components are created according to this scheme:
- **index.tsx** - main file with component declaration. You can put here a React Hooks features (eg.: useState, useEffects etc.), prepare component props, do some base logic etc. This file should return component view layer with component props set.
- **Component.tsx** - file with view layer of component.
- **Component.scss** - file with component style declaration.
- **handlers.ts** - file where You can place useful function for component.

Before You commit or push something on repository, Husky will run code lints and tests.
The configuration files are in the main project folder.

I will add redux usage soon. :)

