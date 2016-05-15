var grunt = require('grunt');
var co = require('co');
var isGeneratorFunction = require('is-generator').fn;

var originalRegisterTask = grunt.registerTask;
grunt.registerTask = function () {
    var lastArg = arguments[arguments.length - 1];
    if (isGeneratorFunction(lastArg)) {
        arguments[arguments.length - 1] = function () {
            var done = this.async();

            co(lastArg.bind(this))
                .then(function (result) {
                    done(null, result);
                })
                .catch(function (err) {
                    done(err);
                });
        };
    }

    return originalRegisterTask.apply(this, arguments);
};
