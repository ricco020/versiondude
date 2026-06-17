/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
  async redirects() {
    return [
      // --- Backlink juice: legacy Subversion paths -> current project pages (EN canonical, no prefix) ---
      { source: '/whattf/htmlparser/trunk/src/nu/validator/htmlparser/impl/Tokenizer.java', destination: '/projects/html5-parser', permanent: true },
      { source: '/whattf/htmlparser/:path*', destination: '/projects/html5-parser', permanent: true },
      { source: '/whattf/syntax/trunk/non-schema/java/src/org/whattf/checker/Checker.java', destination: '/projects/validator-nu', permanent: true },
      { source: '/whattf/syntax/:path*', destination: '/projects/validator-nu', permanent: true },
      { source: '/whattf/build/:path*', destination: '/projects/validator-nu', permanent: true },
      { source: '/whattf/:path*', destination: '/projects/validator-nu', permanent: true },
      { source: '/railfrog/:path*', destination: '/projects/railfrog', permanent: true },
      { source: '/clark-parsia/:path*', destination: '/projects/pellet', permanent: true },
      { source: '/terminal/:path*', destination: '/projects/bersirc', permanent: true },
      // --- Host canonicalization: www + svn -> apex ---
      { source: '/:path*', has: [{ type: 'host', value: 'www.versiondude.net' }], destination: 'https://versiondude.net/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'svn.versiondude.net' }], destination: 'https://versiondude.net/:path*', permanent: true },
    ];
  },
};

module.exports = nextConfig;
