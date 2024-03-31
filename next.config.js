/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "jasonwatmore.com",
    ],
    // S3 호스트를 여기에 추가
  },
};

module.exports = nextConfig;
