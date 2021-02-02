module.exports = ({ env })=>({
    upload: {
        provider: 'cloudinary',
        prodiderOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: end('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
    },
});