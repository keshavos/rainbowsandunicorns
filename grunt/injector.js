module.exports = {

    options: {
        addRootSlash: false,
        ignorePath: 'app/',
        bowerPrefix: 'bower',
    },
    css_dependencies: {
        options: {
            ignorePath: '<%= config.app %>'
        },
        files: {
            '<%= config.app %>/index.html': [
                '<%= config.app %>/assets/css/*.css'
            ]
        }
    },
    jsDir: {
        files: {
            '<%= config.app %>/index.html': [
                '<%= config.app %>/js/config.js',
                '<%= config.app %>/js/**/*.js'
            ]
        }
    },
    bowerDependencies: {
        files: {
            '<%= config.app %>/index.html': ['bower.json'],
        }
    },
    karma_bower_dependencies: {
        options: {
            transform: function(filepath) {
                filepath = 'app/' + filepath;
                return '\'' + filepath + '\',';
            },
            bowerPrefix: 'bower-'
        },
        files: {
            'karma.conf.js': [
                'bower.json'
            ]
        }
    },
    karma_dependencies: {
        options: {
            ignorePath: '',
            transform: function(filepath) {
                return '\'' + filepath + '\',';
            }
        },
        files: {
            'karma.conf.js': [
                '<%= config.app %>/js/config.js',
                '<%= config.app %>/js/**/*.js',
                '<%= config.app %>/modules/*/*.module.js',
                '<%= config.app %>/modules/**/*.js',
                '<%= config.app %>/modules/*/tests/unit/**/*.spec.js',
                '!<%= config.app %>/modules/*/tests/e2e/**/*.js'
            ]
        }
    }

};
