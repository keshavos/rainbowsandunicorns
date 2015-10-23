module.exports = {

    options: {
        browsers: ['last 1 version']
    },
    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.dist %>/assets/css/',
            src: '{,*/}*.css',
            dest: '<%= config.dist %>/assets/css/'
        }]
    }

};
