module.exports =  {

    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.app %>/img',
            src: '{,*/}*.svg',
            dest: '<%= config.dist %>/img'
        }]
    }

};
