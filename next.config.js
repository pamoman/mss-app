/**
 * Next config
 */

 const withPWA = require('next-pwa');

 module.exports = withPWA({
   reactStrictMode: true,
   images: {
     domains: [process.env.NEXT_PUBLIC_API_URL.replace(/^http(s?):\/\//i, "")],
   },
   eslint: {
     ignoreDuringBuilds: true,
   },
   pwa: {
     dest: "public",
     register: true,
     skipWaiting: true,
   },
 });
