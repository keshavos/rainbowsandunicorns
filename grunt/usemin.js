module.exports = {

    html: ['<%= config.dist %>/*.html'],
    css: ['<%= config.dist %>/assets/css/{,*/}*.css'],
    js: ['<%= config.dist %>/scripts/app.*.js'],
    options: {
        assetsDirs: ['<%= config.dist %>/', '<%= config.dist %>/assets/fonts/', '<%= config.dist %>/assets/images/'],
        patterns: {
            js: [
                [
                    /([\w]*\.(?:jpg|png|gif))/gm,
                    'Update the JS templates to reference our revved images'
                ]
            ]
        }
    }

};
