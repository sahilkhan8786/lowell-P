/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['img.freepik.com']
    // }
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'img.freepik.com'
            }
        ]
    }
};

export default nextConfig;
