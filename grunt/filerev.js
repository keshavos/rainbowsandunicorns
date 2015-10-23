module.exports = {

    app: {
        src: [
            '<%= config.dist %>/scripts/{,*/}*.js',
            '<%= config.dist %>/assets/css/{,*/}*.css',
            '<%= config.dist %>/assets/images/ui/*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= config.dist %>/assets/fonts/**/*'
        ]
    }
};
