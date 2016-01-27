var assetDir = './gulp/assets';
var outputDir = './public/assets';
var bowerDir = './bower_components';

module.exports = {

    watch: {
        sass: assetDir + '/stylesheets/**/*.scss',
        scripts: assetDir + '/javascripts/**/*.js',
        react: assetDir + '/javascripts/**/*.jsx',
        images: assetDir + '/images/**/*',
    },

    src: {
        sass: assetDir + '/stylesheets/**/*.scss',
        reactSrc: [
            assetDir + '/javascripts/components/main.jsx',
        ],
        scripts: [
            bowerDir + '/what-input/what-input.js',
            bowerDir + '/jquery/dist/jquery.js',
            bowerDir + '/foundation-sites/dist/foundation.js',
            assetDir + '/javascripts/**/*.js', 
        ],
        images: assetDir + '/images/**/*',
    },

    dest: {
        images:  outputDir + '/images',
        scripts: outputDir + '/javascripts',
        sass: outputDir + '/stylesheets',
    },
}