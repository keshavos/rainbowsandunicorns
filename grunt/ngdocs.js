module.exports =  {

    options: {
        dest: 'docs',
        scripts: [
            'app/lib/jquery/dist/jquery.js',
            'app/lib/bootstrap/dist/js/bootstrap.js',
            'app/lib/angular/angular.js',
            'app/lib/angular-resource/angular-resource.js',
            'app/lib/angular-mocks/angular-mocks.js',
            'app/lib/angular-cookies/angular-cookies.js',
            'app/lib/angular-sanitize/angular-sanitize.js',
            'app/lib/angular-animate/angular-animate.js',
            'app/lib/angular-touch/angular-touch.js',
            'app/lib/angular-bootstrap/ui-bootstrap.js',
            'app/lib/angular-ui-utils/ui-utils.js',
            'app/lib/angular-ui-router/release/angular-ui-router.js'
        ],
        html5Mode: false,
        startPage: '/api',
        title: 'App Documentation',
        titleLink: '/api',
        bestMatch: true
    },
    api: {
        src: ['app/js/*.js', 'app/modules/**/*.js'],
        title: 'App Documentation'
    }

};
