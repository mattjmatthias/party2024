/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    module: {
      rules: [
        {
          test: /\.json$/,
          use: 'json-loader',
        },
      ],
    }
  }

  module.exports = nextConfig