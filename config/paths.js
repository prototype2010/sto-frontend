const path = require('path')

module.exports = {
    // Source files
    src: path.resolve(__dirname, '../src'),

    // Github pages build files
    github_pages: path.resolve(__dirname, '../github_pages'),

    // Production build files
    production: path.resolve(__dirname, '../dist'),

    // Static files that get copied to build folder
    public: path.resolve(__dirname, '../src/images'),
}