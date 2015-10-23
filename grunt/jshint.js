module.exports =  {

    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: [
        'Gruntfile.js'
    ],
    unitTest: {
        options: {
            jshintrc: '.jshintrc'
        },
        src: ['<%= config.app %>/modules/*/tests/unit/*.js']
    }

};
