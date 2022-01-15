module.exports = function(grunt) {
  // Configure main project settings
  grunt.initConfig({
   // grunt.log.write("This grunt task is working.");

   // Basic settings and info about this web app's plugins
    pkg: grunt.file.readJSON('package.json'),

    // Name of plugin (plugin name without the grunt-contrib-")
    //Compile scss files into css files
    sass: {
      dist: {
        files: {
          'styles/styles.css': 'styles/styles.scss',
          'styles/cart.css': 'styles/cart.scss'
        }
      }
    },
    // Combines css files
    cssmin: {
      combine: {
        files: {
          'styles/main.css': ['styles/styles.css', 'styles/cart.css']
        }
      }
    },
    //Combines js files
    uglify: {
      dist: {
        files: {
          'scripts/main.js': ['scripts/app.js', 'scripts/slideshow.js','scripts/cart.js']
        }
      }
    },
    watch: {
      css: {
        files: ['styles/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['Gruntfile.js', 'scripts/*.js']
      }
    }
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Run Tasks
  grunt.registerTask('default', ['sass','cssmin', 'uglify', 'watch']);
  grunt.registerTask('dev', ['watch']);
  //grunt.registerTask("default", "", function(){
   //grunt.log.write("This grunt task is working.");
};
