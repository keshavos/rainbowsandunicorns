module.exports =  {

    server: [
        'copy'
    ],
    test: [
        'cop'
    ],
    dist: [
        'copy',
        'imagemin',
        'svgmin'
    ]

};
