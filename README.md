[![Build Status](https://travis-ci.org/diosmosis/co-grunt.svg?branch=master)](https://travis-ci.org/diosmosis/co-grunt)

# co-grunt

ES6 generator support for grunt. Write async tasks easily w/ 'yield'.

Write asynchronous tasks using generators instead of having to use `var done = this.async()`.

## Example

```
require('co-grunt'); // have to require it so co-grunt can override the default registerTask function.

var request = require('request-promise');

module.exports = function (grunt) {
    grunt.registerTask("goog", function * () {
        var page = yield request('http://google.com');

        console.log("got google?");
        console.log(page);
        console.log("well, now you do!");
    });
};
```
