module.exports = {

    all: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= config.app %>',
            dest: '<%= config.dist %>/',
            src: [
                'assets/fonts/**/*',
                'assets/images/**/*',
                '*.html'
            ]
        }]
    }

};
