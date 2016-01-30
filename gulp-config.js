var assetDir = './gulp/assets';
var outputDir = './public/assets';
var bowerDir = './bower_components';

module.exports = {

    bowerDir: bowerDir,
    
    watch: {
        sass: assetDir + '/stylesheets/**/*.scss',
        scripts: assetDir + '/javascripts/**/*.js',
        react: assetDir + '/javascripts/**/*.jsx',
        images: assetDir + '/images/**/*',
        pages: './app/views/**/*'
    },

    src: {
        sass: assetDir + '/stylesheets/main.scss',
        reactSrc: [
            assetDir + '/javascripts/components/main.jsx',
        ],
        scripts: [
            bowerDir + '/jquery/dist/jquery.js',
            bowerDir + '/bootstrap-sass/javascripts/bootstrap.js',
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