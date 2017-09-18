// The "wrapper" function
module.exports = function(grunt) {
  // Do grunt-related things in here

  // Project and task configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /** 
    * Grunt Sass
    * Comple Sass to CSS using node-saas
    * https://www.npmjs.com/package/grunt-sass
    */
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'css/styles.css' : 'assets/scss/styles.scss'
        }
      }
    },
    /**
    * Grunt contrib watch
    * Monitor files and execute tasks
    * https://www.npmjs.com/package/grunt-contrib-watch
    */
    watch: {
      sass: {
        files: [
          'assets/scss/**/*.scss'
        ],
        tasks: [
          'sass'
        ]
      },
      scripts: {
        files: [
          'assets/js/*.js'
        ],
        tasks: [
          'uglify'
        ]
      }
    },
     /**
    * Grunt contrib uglify
    * Minify JavaScript files
    * https://www.npmjs.com/package/grunt-contrib-uglify
    */
    uglify: {
      my_target: {
        files: {
                'js/scripts.js': ['assets/js/scripts.js', 'node_modules/jquery/dist/jquery.js']
              }
         }
    }

  });


  // Loading Grunt plugins and tasks
  require('load-grunt-tasks')(grunt);


  // Custom tasks
  grunt.registerTask('default', ['watch' ]);

};