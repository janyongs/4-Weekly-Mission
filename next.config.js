/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "jasonwatmore.com",
      "codeit-images.codeit.com",
      "codeit-frontend.codeit.com",
      "assets.vercel.com",
      "reactjs.org",
      "tanstack.com",
      "storybook.js.org",
      "testing-library.com",
      "static.cdninstagram.com",
      "s.pstatic.net",
      "tanstack.com",
      "storybook.js.org",
      "testing-library.com",
      "static.cdninstagram.com",
      "s.pstatic.net",
    ],
    // S3 호스트를 여기에 추가
  },
};

module.exports = nextConfig;
