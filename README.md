# Webpack installation
<!-- 
We will start by install the necessary by go to the terminal on your procject and write: 

    npm init -y
And when that is done:

    npm i -D webpack webpack-cli
Whis will give you a package-lock.json and a package.json files and a node_modules folder
    
    If you use gitHub our a simular backup program you slould make a .gitignore file where you can write:
        node_modules 
    So you are not makeing a to big procjeck for gitHub to save 
    If you latter are missing it you should just write:
        npm init -y 
    In the terminal again and it should show up again without changes in you code 

Now create a folder called src with a index.js file in it
    
    src
        index.js

In this index.js file you can now wriht some javaScipt in this exsempel we will make a const with some text and a querySelector that give you fist h1 you const with text
```js
const heading = "welcome"
document.querySelector("h1").innerText = heading;
``` 
Now you can "npm webpack" write in the terminal:

    npx webpack
It will creat a dist folder with a main.js file

Go to your package.json and make a "build" and a "build:wacht" under script:
```js
    "build": "webpack",
    "build:watch": "webpack --watch",
```
So it will look like this:
```js
{
  "name": "webpack-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "build:watch": "webpack --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^6.8.1",
    "style-loader": "^3.3.3",
    "webpack": "^5.88.2",
    "webpack-cil": "^0.0.1-security",
    "webpack-cli": "^5.1.4"
  }
}
```
    Now when you in the terminal and writes "run build" it will do the same as if you wrote "npx webpack"

Go now to you scr folder andd create a new style.css file:

    src
        index.js
        style.css 

In this new style.css file you can now make some styling of you liking in this exsempel we will give it some: backgound-color, color, font-size and text-align like this:
```css
body {
    background-color: salmon;
    color: moccasin;
}

h1 {
    font-size: 4rem;
    text-align: center;
}
```
    We will latter make this to a scss file

When you are going to you index.js and import this style.css file
```js
import "./style.css"; 

const h = "welcome"
document.querySelector("h1").innerText = h;
``` 

Now we need to write "npm i -D css-loader style-loader" in the terminal 

    npm i -D css-loader style-loader

Then it is done create file a new file called webpack.config.js 

    webpack.config.js 
In this file you need to write this: 
```js
module.exports = {
    module: {
        rules: [
            {
            text: /\.css$/i,
            use: ["style-loader", "css-loader"],
            }
        ]
    }
}
```

Creat now a new index.html in the dist folder and make some html in this exsempel we will write this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack CSS</title>
</head>
<body>
    <div class="container">
        <h1>nonsense</h1>
    </div>

    <script src="./main.js" defer></script>
</body>
</html>
```

Noe write "run build" in the terminal 

    run build
And you are ready

## SCSS

Now you will make your style.css into a style.scss

    style.scss

What mens that where we import our css before must now also be change into scss

So in index.js ./style.css is now ./style.scss:
```js
import "./style.scss";

const h = "welcome"
document.querySelector("h1").innerText = h;
``` 
And in webpack.config.js ".css" is now ".scss":
```js
module.exports = {
    module: {
        rules: [
            {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader"],
            }
        ]
    }
}
``` 
Now we need to write "npm i -D sass sass-loader" in the terminal 

    npm i -D sass sass-loader

When go to our webpack.config.js and add "sass-loader" in use:
```js
module.exports = {
    module: {
        rules: [
            {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    }
}
```

And now we can make scss so we go to our style.scss and writes some scss e.g:
```scss
$light-text: moccasin;

body {
    background-color: salmon;
    color: $light-text;
    
    h1 {
        font-size: 4rem;
        text-align: center;
    }
}
```

When write "run build:watch" in the terminal 

    run build:watch

And you are good to go

## Sourcemaps
Go to our webpack.config.js file and under modulle.exports creat a new "devtool" with a "source-map" string:
```js
module.exports = {
    module: {
        rules: [
            {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    devtool: "source-map"
}
```

Now go to the terminal and write:

    run build

Now you should be able to see the source of you scss by file and line on your inspect in you preference browser


# When you start -->

you need: 

-  .gitigore
```
node_modules
```
- package.json 
```json
{
  "dependencies": {
    "css-loader": "^6.8.1",
    "mini-css-extract-plugin": "^2.7.6",
    "postcss": "^8.4.31",
    "postcss-loader": "^7.3.3",
    "postcss-preset-env": "^9.2.0",
    "sass": "^1.69.3",
    "sass-loader": "^13.3.2",
    "style-loader": "^3.3.3",
    "webpack": "^5.88.2",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  },
  "name": "webpack-test",
  "description": "We will start by install the necessary by go to the terminal on your procject and write:",
  "version": "1.0.0",
  "main": "postcss.config.js",
  "scripts": {
    "serve": "webpack serve",
    "build": "webpack",
    "build:watch": "webpack --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
- postcss.config.js
```js
module.exports = {
	plugins: [require("postcss-preset-env")]
}
```
- webpack.config.js
```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	mode: process.env.environment == "production" ? "production" : "development",
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				//test: path.resolve(__dirname, "src/scss/*"),
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]
			},{
				test: /\.png$/i,
				type: "asset"
			}
		]
	},
	devtool: "source-map",
	devServer: {
		static: "./dist"
	}
}
```
- write in terminal:
> npm install webpack webpack-cli webpack-dev-server css-loader style-loader sass sass-loader postcss postcss-loader postcss-preset-env mini-css-extract-plugin
```
npm install
```
- when make a file:
    src/index.js
- and when 
```
npm run build:watch
```
- now it should work now you be able to create a css or scss and inport it in index.js and create a html in dist that link to the stylesheet main.css