module.exports = {

    options: {
        scripts: [
            '<%= config.app %>/modules/**/*.js',
           '!<%= config.app %>/**/*.po.js',
            '!<%= config.app %>/**/*.spec.js'
        ]
    },
    angularModules: {
        src: ['<%= config.app %>/index.html']
    }

};
