module.exports = {

    app: {
        cwd: '<%= config.app %>',
        src: 'modules/*/views/*.html',
        dest: '.tmp/concat/scripts/templates.js' ,
        options: {
            module: 'angularjsapp'
        }
    }

};
