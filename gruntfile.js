module.exports = function(grunt) {

	// config -----------------------------------------------------------------

	grunt.initConfig({
	
		// concat -------------------------------------------------------------

		concat: {
			js: {
				src: [
					"app/scripts/app.js",
					"app/collections/*.js",
					"app/models/*.js",
					"app/views/*.js",
				],
				dest: "app/bundles/app.full.js"
			},
			css: {
				src: [
					"app/styles/app.css",
					"app/styles/markdown.css"
				],
				dest: "app/bundles/app.full.css"
			}		
		},

		// jshint -------------------------------------------------------------

		jshint: {
			options: {
				jshintrc: ".jshintrc"
			},
			files: [
				"app/bundles/app.full.js"
			]
		},

		// docco -------------------------------------------------------------

		docco: {
			dist: {
				src: ["app/bundles/app.full.js"],
				options: {
					output: "doc/docco"
				}
			}
		},

		// uglify -------------------------------------------------------------

		uglify: {
			js: {
				src: "app/bundles/app.full.js",
				dest: "app/bundles/app.min.js"
			}
		},

		// cssmin -------------------------------------------------------------

		cssmin: {
			css: {
				src: "app/bundles/app.full.css",
				dest: "app/bundles/app.min.css"
			}
		}
		
	});

	// load -------------------------------------------------------------------

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-docco");

	// register ---------------------------------------------------------------

	grunt.registerTask("default", [
		"concat", 
		"jshint", 
		"docco",
		"uglify", 
		"cssmin"
	]);

}
