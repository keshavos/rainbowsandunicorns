module.exports = {

    options: {
        keepSpecialComments: 0
    },
    files: [{
        expand: true,
        cwd: '<%= config.dist %>/assets/css/',
        src: ['*.css'],
        dest: '<%= config.dist %>/assets/css/'
    }]

};
