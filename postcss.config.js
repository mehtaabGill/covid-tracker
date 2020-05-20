module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss')
    ],
    purge: {
        mode: 'all',
        content: [
            './src/**/*.html',
            './src/**/*.vue'
        ]
    }
}