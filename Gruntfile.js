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
                    'app/assets/css/main.css': 'app/assets/**/*.less'
                },
                    {
                        'styles/main.css': 'styles/**/*.less'
                    }]
            }
        },
        watch: {
            options: {
                liveReload: true
            },
            styles: {
                // Which files to watch (all .modules files)
                files: ['styles/**/*.less', 'app/assets/**/*.less'],
                tasks: ['less', 'concat','cssmin'],
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
                    'app.min.css': 'app.css'
                }
            }
        },
        concat: {
            basic: {
                src: ['app/assets/css/main.css', 'styles/main.css'],
                dest: 'app.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['less', 'concat','cssmin']);
};