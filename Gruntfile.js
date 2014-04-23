'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      lint: ['server.js', 'Gruntfile.js'],
      options: {}
    }
  });

  grunt.registerTask('build', ['jshint']);
};
