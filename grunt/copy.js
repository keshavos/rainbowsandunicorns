module.exports =  {

    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= config.app %>',
            dest: '<%= config.dist %>',
            src: [
                '*.{ico,png,txt}',
                '.htaccess',
                'index.html',
                'modules/*/views/*.html',
                'img/{,*/}*.{webp}',
                'fonts/*'
            ]
        }, {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= config.dist %>/img',
            src: ['generated/*']
        }]
    },
    styles: {
        expand: true,
        cwd: '<%= config.app %>/css',
        dest: '.tmp/css/',
        src: '**/*.css'
    }

};
