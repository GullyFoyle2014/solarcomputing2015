module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    // This line makes your node configurations available for use
    pkg: grunt.file.readJSON('package.json'),
    // This is where we configure JSHint
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      myFiles: ['js/*.js']
    },
    sass: {
        dist: {
            options: {
                style: 'expanded'
            },
            files: [{
              expand: true,
              cwd: 'css',
              src: ['*.scss'],
              dest: 'css/compiled',
              ext: '.css'
          }]
        }
    },
    cssmin: {
      production: {
        expand: true,
        cwd: 'css/compiled',
        src: ['*.css'],
        dest: 'css/compiled/min'
      }
    }
  });
  // Each plugin must be loaded following this pattern
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass'],['jshint'],['cssmin']); 
};
