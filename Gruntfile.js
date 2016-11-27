module.exports = function(grunt) {

   grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
      
		csslint: {
		  strict: {
			src: ['src/css/skin.css','src/css/viber.css']
		  }
		},
		
		cssmin: {
			options: {
				report:'gzip',
				keepSpecialComments: 0
			},
			target: {
				files: {'dist/css/skin.min.css': ['src/plugin/bootstrap-3.3.7-dist/css/bootstrap.css','src/plugin/pace/pace.css','src/css/skin.css','src/css/viber.css'] }
			},
			target2: {
				files: {'dist/css/viber.min.css': ['src/css/viber.css'] }
			}
		},
		
		jshint: {
			ignore_warning: {
				src: ['src/js/skin.js','src/js/viber.js']
			}
		},
			
		uglify: {
			options: {
				report:'gzip',
				keepSpecialComments: 0
			},
			target: {
				files: {'dist/js/core.min.js': ['src/plugin/jquery-1.12.4/jquery.min.js','src/plugin/bootstrap-3.3.7-dist/js/bootstrap.js','src/plugin/pace/pace.js','src/js/skin.js','src/js/viber.js']}
			},
			target2: {
				files: {'dist/js/viber.min.js': ['src/js/viber.js']}
			}
		},
		
		watch: {
			scripts: {
				files: ['src/viber.js'],
				tasks: ['sass', 'csslint', 'jshint','cssmin', 'uglify'],
				options: {spawn: false,},
			},
		},
		
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {'src/css/skin.css': 'src/css/skin.scss'}
			},
			dist2: {
				files: {'src/css/viber.css': 'src/css/viber.scss'}
			}
		}
   });

   grunt.loadNpmTasks('grunt-contrib-csslint');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-sass');

   grunt.registerTask('manual', ['sass', 'csslint', 'jshint','cssmin', 'uglify']);
   grunt.registerTask('default', ['watch']);

};