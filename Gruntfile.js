// Generated on 2013-02-27 using generator-webapp 0.1.5
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'slient',
        dist: 'dist'
    };

    var barstaskdef = {
        files: {
            "slient/edit/compiled-templates.js": ["slient/edit/**/templates/*.bars"]
        },
        options: {
            namespace: 'JST',
            processName: function(filename) {
                console.log(filename);
                return filename
                    .replace(/^slient\//, '')
                    .replace(/\.bars$/, '')
                    .replace('edit/', '')
                    .replace('app/', '') // TODO: just make a regex once moving is complete
                    .replace('common/', '') // see above todo
                    .replace('templates/', '');
            },
            amd: true
        }
    };

    grunt.initConfig({
        yeoman: yeomanConfig,

        handlebars: {
            compile: barstaskdef
        },

        less: {
            compile: {
                files: {
                    "<%= yeoman.app %>/styles/edit.css": "<%= yeoman.app %>/styles/edit.less"
                }
            }
        },

        replace: {
            compile: {
                src: ['<%= yeoman.dist %>/pmc.html', '<%= yeoman.dist %>/edit.html'],
                overwrite: true, // overwrite matched source files
                replacements: [{
                    from: "window.isOptimized = false;",
                    to: "window.isOptimized = true;"
                }]
            }
        },
        connect: {
            options: {
                port: 49406,
                livereload: 49407,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        watch: {
            handlebars: {
                files: [
                    "app/**/templates/*.bars"
                ],
                tasks: ['handlebars', 'livereload-start']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>' // this port must be same with the connect livereload port
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,webp}'
                ],
                tasks: ['livereload']
            },
            less: {
                files: [
                    "app/**/*.less"
                ],
                tasks: ['less']
            }
        },
        open: {
            //        	target: 'http://localhost:8888', // target url to open
            //        	appName: 'open', // name of the app that opens, ie: open, start, xdg-open
            //        	callback: function() {} // called when the app has opened
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp',
            tmp: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        //添加多目录
        requirejs: {
            dist1: {
                options: {
                    baseUrl: 'app/slide_pmc_module',
                    optimize: 'none',
                    mainConfigFile: 'app/slide_pmc_module/main.js', //require 配置文件路径
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    done: function(done, output) {
                        var duplicates = require('rjs-build-analysis').duplicates(output);
                        if (duplicates.length > 0) {
                            grunt.log.subhead('Duplicates found in requirejs build:');
                            grunt.log.warn(duplicates);
                            done(new Error('r.js built duplicate modules, please check the excludes option.'));
                        }
                        done();
                    },
                    out: 'dist/scripts/pmc/amd-app.js'
                }
            },
            dist2: {
                options: {
                    baseUrl: 'app/slide_edit_module',
                    optimize: 'none',
                    mainConfigFile: 'app/slide_edit_module/main.js',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    done: function(done, output) {
                        var duplicates = require('rjs-build-analysis').duplicates(output);
                        if (duplicates.length > 0) {
                            grunt.log.subhead('Duplicates found in requirejs build:');
                            grunt.log.warn(duplicates);
                            done(new Error('r.js built duplicate modules, please check the excludes option.'));
                        }
                        done();
                    },
                    out: 'dist/scripts/edit/amd-app.js'
                }
            }
        },
        useminPrepare: {
            src: ['<%= yeoman.app %>/edit.html', '<%= yeoman.app %>/pmc.html'],
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles',
                    src: '{,*/}*.{png,jpg,jpeg}', // Optimize the img directory all PNG/JPG/jpeg images
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/edit/main.css': ['<%= yeoman.dist %>/styles/edit/main.css', '.tmp/built.css'],
                    '<%= yeoman.dist %>/styles/pmc/main.css': ['<%= yeoman.dist %>/styles/pmc/main.css'],
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/',
                    src: '*.html',
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
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '.htaccess',
                            'empty.html',
                            'index.html',
                            'preview_export/**',
                            'zip/**',
                            'slide_admin_module/**',
                            'slide_piazza_module/**',
                            'scripts/libs/jQuery.js',
                        ]
                    }, {
                        expand: true,
                        dot: true,
                        flatten: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>/styles/edit/img',
                        src: [
                            'styles/edit/**/*.{ico,txt,png,jpg,gif,svg}',
                            'components/**/*.{ico,txt,png,jpg,gif,svg}',
                        ]
                    }, {
                        expand: true,
                        dot: true,
                        flatten: true,
                        cwd: '<%= yeoman.app %>/styles/pmc/img',
                        dest: '<%= yeoman.dist %>/styles/pmc/img',
                        src: [
                            '**/*.{ico,txt,png,jpg,gif,svg}',
                        ]
                    }, {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>/styles',
                        dest: '<%= yeoman.dist %>/styles',
                        src: [
                            'piazza/**/*.{ico,txt,png,jpg,gif,svg,css}',
                            'admin/**/*.{ico,txt,png,jpg,gif,svg,css}',
                        ]
                    }, {
                        expand: true,
                        dot: true,
                        flatten: true,
                        cwd: '<%= yeoman.app %>/styles/img',
                        dest: '<%= yeoman.dist %>/styles/img',
                        src: [
                            '**/*.{ico,txt,png,jpg,gif,svg}',
                        ]
                    },
                    // TODO: figure out what the deal is with the fonts in dist mode...
                    {
                        expand: true,
                        dot: true,
                        flatten: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>/styles',
                        src: [
                            '**/*.woff'
                        ]
                    }, {
                        expand: true,
                        cwd: '<%= yeoman.app %>/styles/strut.themes',
                        dest: '<%= yeoman.dist %>/styles/strut.themes',
                        src: [
                            '**/*.png',
                            '*.css'
                        ]
                    }
                ]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        }
    });

    grunt.registerTask('start', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            // 'clean:server',
            'handlebars',
            'less',
            'livereload-start',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('develop', [
        'connect:dist:keepalive'
    ]);

    grunt.registerTask('test', [
        'clean:server',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'less',
        'handlebars',
        'useminPrepare',
        'requirejs',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'replace',
        'usemin',
        'clean:tmp'
    ]);

    grunt.registerTask('default', [
        // 'jshint',
        'test',
        'build'
    ]);
};