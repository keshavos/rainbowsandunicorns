module.exports = {

    options: {
            port: 9000,
            hostname: 'localhost',
            livereload: 35729
        },
        livereload: {
            options: {
                open: true,
                base: [
                    '.tmp',
                    '<%= config.app %>'
                ]
            }
        },
        test: {
            options: {
                port: 9001,
                base: [
                    '.tmp',
                    'test',
                    '<%= config.app %>'
                ]
            }
        },
        dist: {
            options: {
                base: ['<%= config.dist %>']
            }
        },
        docs: {
            options: {
                base: ['docs/']
            }
        }

};
