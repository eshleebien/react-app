module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        bower_concat: {
                all: {
                        dest: "src/js/vendor/bower.js",
                        destCss: "src/css/vendor/bower.css"
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('default', ['bower_concat']);
    grunt.registerTask('build', ['default']);
}
