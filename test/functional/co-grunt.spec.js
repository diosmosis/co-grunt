var path = require('path'),
    expect = require('chai').expect,
    execSync = require('child_process').execSync,
    readFileSync = require('fs').readFileSync;

describe('co-mocha', function () {
    it("should wrap grunt.registerTask correctly", function () {
        var basePath = path.join(__dirname, '../..'),
            command = [
                path.join(basePath, "node_modules/.bin/grunt"),
                "test5",
                "2>&1"
            ].join(" "),
            workingDirectory = path.join(__dirname, "sample");

        var result;
        try {
            result = execSync(command, {cwd: workingDirectory}).toString('utf-8');
        } catch (err) {
            result = err.stdout.toString('utf-8');
        }

        var expectedContents = readFileSync(path.join(__dirname, 'expected.out.txt')).toString('utf-8');

        expect(result).to.equal(expectedContents);
    });
});
