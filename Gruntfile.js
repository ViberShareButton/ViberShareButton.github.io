module.exports = function(grunt) {

   grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
      
		csslint: {
		  strict: {
			src: ['src/css/skin.css','src/css/viber.css','src/css/font.css']
		  }
		},
		
		cssmin: {
			options: {
				report:'gzip',
				keepSpecialComments: 0
			},
			target: {
				files: {'dist/css/skin.min.css': ['src/plugin/bootstrap-3.3.7-dist/css/bootstrap.css','src/plugin/pace/pace.css','src/css/skin.css','src/css/viber.css','src/css/font.css'] }
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
		
		compress: {
			main: {
				options: {
				  archive: 'download/jquery_viber_share_button.zip'
				},
				files: [
				  {expand: true, cwd: 'src/css/', src: 'viber.css', dest: 'css/'},
				  {expand: true, cwd: 'dist/css/', src: 'viber.min.css', dest: 'css/'},
				  {expand: true, cwd: 'src/js/', src: 'viber.js', dest: 'js/'},
				  {expand: true, cwd: 'dist/js/', src: 'viber.min.js', dest: 'js/'}, 
				  {expand: true, cwd: 'dist/image/', src: 'sprites.png', dest: 'image/'}, 
				]
			}
		},
		
		watch: {
			scripts: {
				files: ['src/js/skin.js','src/js/viber.js','src/css/skin.scss','src/css/viber.scss','src/css/sprite.scss'],
				tasks: ['copy', 'sass', 'csslint', 'jshint', 'cssmin', 'uglify', 'compress'],
				options: {spawn: false,},
			},
		},
		
		copy: {
			bootstrapFonts: {
				files: [
				  {expand: true, cwd: 'src/plugin/bootstrap-3.3.7-dist/fonts/', src: '**', dest: 'dist/fonts/'},
				],
			},
			icon: {
				files: [
				  {expand: true, cwd: 'src/image/', src: 'favicon.ico', dest: 'dist/image/'},
				],
			},
			sprite: {
				files: [
				  {expand: true, cwd: 'src/image/', src: 'sprites.png', dest: 'dist/image/'},
				],
			},
			googleFonts: {
				files: [
				  {expand: true, cwd: 'src/fonts/', src: '**', dest: 'dist/fonts/'},
				],
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
   grunt.loadNpmTasks('grunt-contrib-compress');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-sass');

   grunt.registerTask('manual', ['sass', 'csslint', 'jshint','cssmin', 'uglify']);
   grunt.registerTask('default', ['watch']);

};