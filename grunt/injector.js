module.exports =  {

    options: {
        addRootSlash: false,
        ignorePath: 'app/',
        bowerPrefix: 'bower',
    },
    localDependencies: {
        files: {
            'app/index.html': [
                'app/js/config.js',
                'app/js/application.js',
                'app/modules/*/*.js',
                'app/modules/*/config/*.js',
                'app/modules/*/services/*.js',
                'app/modules/*/directives/*.js',
                'app/modules/*/filters/*.js',
                'app/modules/*/controllers/*.js',
                'app/css/**/*.css'
            ]
        }
    },
    bowerDependencies: {
        files: {
            'app/index.html': ['bower.json'],
        }
    },
    karmaDependencies: {
        options: {
            ignorePath: '',
            transform: function(filepath) {
                return '\'' + filepath + '\',';
            }
        },
        files: {
            'karma.conf.js': ['bower.json'],
        }
    }

};
