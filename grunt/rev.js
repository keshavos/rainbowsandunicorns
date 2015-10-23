module.exports =  {

    dist: {
        files: {
            src: [
                '<%= config.dist %>/app/js/*.js',
                '<%= config.dist %>/app/modules/*/*.js',
                '<%= config.dist %>/app/modules/*/config/*.js',
                '<%= config.dist %>/app/modules/*/services/*.js',
                '<%= config.dist %>/app/modules/*/directives/*.js',
                '<%= config.dist %>/app/modules/*/filters/*.js',
                '<%= config.dist %>/app/modules/*/controllers/*.js',
                '<%= config.dist %>/app/css/**/*.css',
                '<%= config.dist %>/app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                '<%= config.dist %>/css/fonts/*'
            ]
        }
    }

};
