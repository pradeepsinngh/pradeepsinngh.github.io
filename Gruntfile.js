// Generated on 2014-01-05 using generator-jekyllrb 1.1.0
'use strict';

// Directory reference:
//   css: assets/css
//   compass: scss
//   javascript: assets/js
//   images: images
//   fonts: assets/fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({

    /* __________ CONFIGURABLE PATHS __________ */
    yeoman: {
      app: 'app',
      dist: 'dist'
    },

    watch: {
      compass: {
        files: ['<%= yeoman.app %>/scss/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/assets/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '_config.yml',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/assets/css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/images/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },

    /* __________ CONNECT __________ */
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },

    /* __________ COMPASS __________ */
    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        // require: ['singularity', 'jacket'],
        bundleExec: true,
        sassDir: '<%= yeoman.app %>/scss',
        cssDir: '.tmp/assets/css',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/assets/js',
        relativeAssets: false,
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        outputStyle: 'compressed',
        lineComments: false,
        raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated',
          cssDir: '<%= yeoman.app %>/assets/css'
        }
      },
      server: {
        options: {
          debugInfo: true,
          generatedImagesDir: '.tmp/images/generated',
          cssDir: '.tmp/assets/css'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/assets/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/assets/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/assets/css',
          src: '**/*.css',
          dest: '.tmp/assets/css'
        }]
      }
    },

    /* __________ JEKYLL __________ */
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },

    /* __________ USEMIN __________ */
    // UseminPrepare will only scan a single page for usemin blocks. If you
    // use usemin blocks that aren't in index.html, create a usemin manifest
    // page (hackery!) and point this task there.
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        basedir: '<%= yeoman.dist %>',
        dirs: ['<%= yeoman.dist %>/**/*']
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/assets/css/**/*.css'],
      js: ['<%= yeoman.dist %>/assets/js/**/*.js']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    // concat: {},
    // Usemin adds files to uglify
    // uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      minify: {
        expand: true,
        cwd: '<%= yeoman.app %>/assets/css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= yeoman.dist %>/assets/css/',
        ext: '.min.css'
      },
      dist: {
        options: {
          check: 'gzip'
        }
      },
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'images/**/*',
            '!**/_*{,/**}',

            'assets/js/lib.js',
            'assets/js/magic.js',

            '_bower_components/jquery/jquery.min.js',
            '_bower_components/skrollr/dist/skrollr.min.js'
            //'favicon.ico',
            //'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/assets/css',
          src: '**/*.css',
          dest: '.tmp/assets/css'
        }]
      }
    },
    rev: {
      options: {
        length: 4
      },
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/assets/js/**/*.js',
            '<%= yeoman.dist %>/assets/css/**/*.css',
            '<%= yeoman.dist %>/images/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/assets/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: '/home/sites/kingsidharth.com',
          branch: 'master',
          commit: true,
          push: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/assets/js/**/*.js',
        '!<%= yeoman.app %>/assets/js/vendor/**/*'
      ]
    },
    csscss: {
      options: {
        bundleExec: true,
        minMatch: 2,
        ignoreSassMixins: false,
        compass: true,
        colorize: true,
        shorthand: false,
        verbose: true
      },
      check: {
       src: ['<%= yeoman.app %>/assets/css/**/*.css',
             '<%= yeoman.app %>/scss/**/*.scss']
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>}/assets/css/**/*.css',
          '<%= yeoman.app %>}/scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'compass:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'compass:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
     'clean:server',
     //'concurrent:test',
     'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    //'jshint:all',
    'csscss:check',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'jekyll:dist',
    'compass:dist',
    'concurrent:dist',
    'useminPrepare',
    'compass:server',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    'rev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
