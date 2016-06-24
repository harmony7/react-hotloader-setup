# Steps

# Step 1 - Set up Webpack

Create a working directory and initialize a `package.json` file there.

```
mkdir project
cd project
npm init
```

We want to get the newest betas (as of this writing) of `webpack` and `webpack-dev-server`,
and latest normal versions of some other tools.

```
npm install webpack@^2.1.0-beta.13 webpack-dev-server@^2.0.0-beta rimraf cross-env eslint --save-dev
```

Create some boilerplate files with content from this repo:

* `.gitignore`
* `.eslintrc.js`
* `webpack.config.js`

Create `index.html`, `src/index.js`.
Create `hot-reload-server.js`.

Add scripts section to `package.json` and add tasks for linting, serving, and building.

# Step 2 - Add Babel for ES2015 and React Support

ES2015 + ES2017 async/await

```
npm install babel-core babel-loader babel-preset-es2015 babel-plugin-transform-runtime babel-plugin-transform-async-to-generator --save-dev
npm install babel-runtime --save
```

Add loader config to `webpack.config.js`.

Update code in `src/index.js` to test both ES2015 and async/await.
Update code in `.eslintrc.js` to support ES6.


React

```
npm install react react-dom babel-preset-react --save-dev
```

