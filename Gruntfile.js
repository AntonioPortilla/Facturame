module.exports = function(grunt) {

  require('time-grunt')(grunt);  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      pub: 'public',
      docs: 'docs/prueba'
    },
    concat: {
      options: {
          stripBanners: true
      },
      dist: {
          src: 'dev/css/*.css',
          dest: 'prod/css/styles.css'
      }
    },
    cssmin: {
      compress: {
        files: {
          "public/css/styles.min.css": 'prod/css/styles.css'
        }
      }
    }, 
    uglify: {
      core: {
        files: {
          'public/js/scripts.min.js': [
          'dev/js/scripts.js',
          'dev/js/jquery.sabecarousel.js',
          'dev/js/scrolltop.js',
          'dev/js/foundation.min.js'
          ]
        }
      }
    },
    copy: {
      fonts: {
        expand: true,
        src: ['fonts/*', 'images/*', 'tpl/*'],
        dest: 'public/'
      },
      docs: {
        expand: true,
        cwd: 'public/',
        src: [
          '**/*'
        ],
        dest: 'docs/public'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'dev/js/*.js']
    },    
    exec: {
      npmUpdate: {
        command: 'npm update'
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // Default task(s).
  grunt.registerTask('minify', ['cssmin', 'uglify']);  
  grunt.registerTask('public', ['copy:docs', 'clean', 'concat', 'minify', 'copy:fonts']);

};