module.exports =  {

    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.app %>/img',
            src: '{,*/}*.{png,jpg,jpeg,gif}',
            dest: '<%= config.dist %>/img'
        }]
    }

};
