module.exports =  {

    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= config.dist %>/*',
                '!<%= config.dist %>/.git*'
            ]
        }]
    },
    docs: {
        files: [{
            dot: true,
            src: [
                'docs/'
            ]
        }]
    }

};
