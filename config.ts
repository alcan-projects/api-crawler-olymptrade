export default {
    port: process.env.URL_PORT || 5000,
    host: process.env.URL_HOST || 'localhost',
    header: process.env.URL_HEADER || 'http',
}