require('../../../lib');

module.exports = function (grunt) {
    grunt.registerTask('test1', 'with description', function * () {
        console.log("Entering generator task.");

        yield thunk("First thunk");

        yield thunk("Second thunk");

        console.log("Finished generator task.");
    });

    grunt.registerTask('test2', function * () {
        console.log("Entering test 2 generator. (no desc)");

        yield thunk("First thunk");

        console.log("Finished generator task.");
    });

    grunt.registerTask('test3', function () {
        console.log('Entering test 3. (normal)');
    });

    grunt.registerTask('test4', 'with description', function () {
        console.log('Entering test 4. (normal)');
    });

    grunt.registerTask('test5', 'with dep tasks', ['test1', 'test2', 'test3', 'test4']);
};

function thunk(value) {
    return function (cb) {
        console.log(value);
        cb();
    };
}
