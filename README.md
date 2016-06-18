# THIS REPO IS DEPRECATED
This repo is deprecated and no longer maintained. RiotJS has performance issues with any non-trivial single page application. Use [Vue.js](https://vuejs.org/) instead. See [this article](https://vuejs.org/guide/comparison.html#Riot) for more info.

# riotjs-boilerplate
I've been playing around with some projects that use the same boilerplate code to set up RiotJS with a bunch of tools I commonly use, so I decided to extract it out into a separate repo to serve as a quickstart repo.

This is what's included:

* [Webpack] (https://webpack.github.io/) - provides a development web server and compiles the RiotJS tag files into JS
* [RiotJS] (https://muut.com/riotjs/) - microJS library for handle data binding in HTML views (think [React](https://facebook.github.io/react/), but leaner)
* [RiotControl] (https://github.com/jimsparkman/RiotControl) - simplified [Flux](https://facebook.github.io/flux/) pattern implementation for RiotJS
* [Jade] (http://jade-lang.com/) - templating engine that provides a cleaner and faster way to write HTML
* [Babel] (https://babeljs.io/) - polyfill for ES6 syntax, required by riotjs-loader
* [riotjs-loader] (https://www.npmjs.com/package/riotjs-loader) - loader that allows Webpack to process RiotJS tag files
* [Semantic UI] (http://semantic-ui.com/) - Modern CSS GUI library that blows Twitter Bootstrap out of the water

## Install
    npm install

## Run
    npm start
Then navigate to [http://localhost:8080/](http://localhost:8080/). You should see a page with the text **Hello world**.
