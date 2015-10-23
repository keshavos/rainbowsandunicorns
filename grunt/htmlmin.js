module.exports =  {

    dist: {
        options: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA: true
        },
        files: [{
            expand: true,
            cwd: '<%= config.dist %>',
            src: ['*.html', '<%= config.app %>/modules/*/views/*.html'],
            dest: '<%= config.dist %>'
        }]
    }

};
