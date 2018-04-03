export default {
    head: {
        title: 'Simple Nuxt'
    },
    build: {
        optimization: {
            splitChunks: {
                name: true
            },
            // minimizer: []
        }
    }
}
