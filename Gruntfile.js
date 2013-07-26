module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Project configuration.
  grunt.initConfig({
    builddir: 'build',
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/**\n' +
        ' * <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %><%= buildtag %>\n' +
        ' * @link <%= pkg.homepage %>\n' +
        ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
        ' */'
    },
    clean: [ '<%= builddir %>' ],
    concat: {
      build: {
        src: [
          'src/angular.js',
          'src/angular-ui-router.js',
          'src/lazyinclude.js',
          'src/core/core.js',
          'src/modules/demand/routes.js',
          'src/modules/order/routes.js'
        ],
        dest: '<%= builddir %>/<%= pkg.name %>.min.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      build: {
        files: {
          '<%= builddir %>/<%= pkg.name %>.min.js': ['<banner:meta.banner>', '<%= concat.build.dest %>']
        }
      }
    },
    jshint: {
            all: ['src/*.js']
    },

    watch: {
      files: ['src/*.js', 'src/modules/**/*.js']
    },
    connect: {
      server: {}
    },

  });



  // Default task(s).
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['concat', 'uglify']);
  grunt.registerTask('dev', 'Run dev server and watch for changes', ['connect', 'watch']);

};

