module.exports = {

    bower: {
        files: ['bower.json'],
        tasks: ['injector']
    },

    js: {
        files: [
            '<%= config.app %>/modules/*/*.js',
            '<%= config.app %>/modules/*/config/*.js',
            '<%= config.app %>/modules/*/controllers/*.js',
            '<%= config.app %>/modules/*/services/*.js',
            '<%= config.app %>/modules/*/directives/*.js',
            '<%= config.app %>/modules/*/filters/*.js'
        ],
        tasks: [
            'newer:jshint:all',
            'ngdocs'
        ],
        options: {
            livereload: true
        }
    },

    jsUnitTest: {
        files: ['<%= config.app %>/modules/*/tests/unit/*.js'],
        tasks: ['karma:unit']
    },

    styles: {
        files: ['<%= config.app %>/css/**/*.css'],
        tasks: [
            'newer:copy:styles',
            'autoprefixer'
        ]
    },

    gruntfile: {
        files: ['Gruntfile.js']
    },

    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= config.app %>/*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= config.app %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    }

};
