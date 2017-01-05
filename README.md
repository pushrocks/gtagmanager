# gtagmanager
Google Tag Manager the easy way

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/gtagmanager)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/gtagmanager)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/gtagmanager)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/gtagmanager/)

## Status for master
[![build status](https://GitLab.com/pushrocks/gtagmanager/badges/master/build.svg)](https://GitLab.com/pushrocks/gtagmanager/commits/master)
[![coverage report](https://GitLab.com/pushrocks/gtagmanager/badges/master/coverage.svg)](https://GitLab.com/pushrocks/gtagmanager/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/gtagmanager.svg)](https://www.npmjs.com/package/gtagmanager)
[![Dependency Status](https://david-dm.org/pushrocks/gtagmanager.svg)](https://david-dm.org/pushrocks/gtagmanager)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/gtagmanager/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/gtagmanager/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/gtagmanager/badges/code.svg)](https://www.bithound.io/github/pushrocks/gtagmanager)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

Once imported, this package will add a dataLayer to the window object.
A dataLayer is a simple array. You can push data to this array using the array prototype method .push():

```javascript
import * as gtm from 'gtagmanager'
gtm.standardDataLayerInit() // will add a standard dataLayer to the window object
window.dataLayer.push({
    "someKey": "someValue",
    "anotherKey": "anotherValue"
})

// continues in next code block
```

Now that you have a dataLayer it is time to set up the Google Tag Manager
```javascript
// continued from last codeblock

let myGTM = new gtm.GTagManager('someGTMid')
// Note:
// constructor accepts an optional dataLayer array as second parameter
// will use window.dataLayer by default as dataLayer

myGTM.start() // starts the GTM instance
myGTM.pushToDataLayer({ "myKey": "myValue" }) // allows pushing to the GTM instance's dataLayer in case it defers from window.dataLayer

```

### Writing to data layer from different parts of your website
In some setups it may be desireable to build the dataLayer in the frontend when components are loaded together that didn't exist together before in the serving stack chain.
You can do so from any part of the website by referring to `window.dataLayer.push({ /* your key:value things here */ })`

### Making sure Google Tag Manager delivers data under all circumstances
Google Tag Manager is basically a Java Script Injection engine, that runs async. So there is always a risk of a user navigating away before GTM finishes execution
The only more or less stable way to avoid most scenarios is to use something more persistent like Service Worker for gathering data and caching important scripts at the user's location

### Support for older browsers
By default gtagmanager compiles TypeScript to ES6 as most modern browsers support it by now.
In order to maximise browser compatibility there is a ES5 transpiled version available:

```JavaScript
var gtm = require('gtagmanager/es5/index')
```

### Bundle it for performance
We recommend bundling this module for production using browserify, jspm.io or webpack
[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
