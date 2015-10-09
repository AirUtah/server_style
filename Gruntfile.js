module.exports = function (grunt) {

  // Force use of Unix newlines
  //grunt.util.linefeed = '\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      main: {
        options: {
          strictMath: false,
          sourceMap: true,
          outputSourceFiles: false,
          sourceMapURL: 'app.css.map',
          sourceMapFilename: 'app/assets/css/app.css.map'
        },
        files: [{
          'app/assets/css/assets.css': 'app/assets/less/*.less'
        },
          {
            'styles/styles.css': 'styles/less/*.less'
          },
          {
            'app.css': '*.less'
          }]
      }
    },
    watch: {
      options: {
        liveReload: true
      },
      styles: {
        // Which files to watch (all .less files)
        files: ['styles/**/*.less', 'app/assets/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },

    cssmin: {
      options: {
        //shorthandCompacting: false,
        //roundingPrecision: -1
      },
      target: {
        files: {
          'app/assets/css/app.css': ['app/assets/css/app.min.css']
        }
      }
    },
    concat: {
      basic: {
        src: ['app/assets/css/*.css','styles/css/*.css','app.css'],
        dest: 'compiled.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['less','concat']);
};