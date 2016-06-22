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

