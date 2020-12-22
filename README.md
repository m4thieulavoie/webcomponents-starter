# webcomponents-starter

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

`webcomponents-starter` aims to be a battery-included starter project for any Web Components enthousiasth. Its goal is to accelerate your development process by providing all the behind-the-scenes tools, such as

- Webpack
- Typescript
- SASS
- Prettier/eslint/stylelint
- A few Web Components examples (Made with FAST here)
- vaadin router

This repo is based on this [vaadin article](https://vaadin.com/learn/tutorials/using-web-components) for Web Components in Webpack, and this [Webpack article](https://webpack.js.org/guides/typescript/) for the Typescript support

## Getting started

### Clone the project

```bash
git clone git@github.com:m4thieulavoie/webcomponents-starter.git
```

### Install dependencies

Then, to init the project

```bash
cd webcomponents-starter
npm install
```

### Start the project

If you want to run the project, simply run

```bash
npm start
```

`Webpack` will then indicate you to open `localhost:3000`. When you'll do so, you'll see the project running.

## Web Components

### Underlying framework

For the sake of this project, we rely on [FAST Components](https://github.com/microsoft/fast) to accelerate the development of components. Definitely feel free to get rid of the dependency and add your favourite framework if you feel like it!

### Polyfills

We provide `@webcomponents/webcomponentsjs` in the project, but disabled it by default (for bundle size reasons). If you want to support older browsers, head in `index.ts` and uncomment the line that `require`s `webcomponentsjs`.
