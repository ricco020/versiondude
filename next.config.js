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
      // --- Backlink juice: legacy Subversion paths -> home (phase démo : jamais 404 ;
      //     re-pointer vers les pages topiques quand le vrai contenu sera en place) ---
      { source: '/whattf/:path*', destination: '/', permanent: true },
      { source: '/railfrog/:path*', destination: '/', permanent: true },
      { source: '/clark-parsia/:path*', destination: '/', permanent: true },
      { source: '/terminal/:path*', destination: '/', permanent: true },
      { source: '/how-html-parsing-works', destination: '/', permanent: true },
      { source: '/fr/comment-fonctionne-analyse-html', destination: '/', permanent: true },
      { source: '/es/como-funciona-el-analisis-html', destination: '/', permanent: true },
      // --- Host canonicalization: www + svn -> apex ---
      { source: '/:path*', has: [{ type: 'host', value: 'www.versiondude.net' }], destination: 'https://versiondude.net/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'svn.versiondude.net' }], destination: 'https://versiondude.net/:path*', permanent: true },
    ];
  },
};

module.exports = nextConfig;
