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
      // --- Backlink juice: legacy Subversion paths -> pages topiques (apex absolu = 1 hop depuis svn) ---
      // html5-parser (johnresig DR79, whatwg DR91, intertwingly DR73)
      { source: '/whattf/htmlparser/:path*', destination: 'https://versiondude.net/projects/html5-parser', permanent: true },
      // validator.nu (w3.org TAG DR94, root.cz, bugzilla.validator.nu DR75)
      { source: '/whattf/syntax/:path*', destination: 'https://versiondude.net/projects/validator-nu', permanent: true },
      { source: '/whattf/build/:path*', destination: 'https://versiondude.net/projects/validator-nu', permanent: true },
      { source: '/whattf/:path*', destination: 'https://versiondude.net/projects/validator-nu', permanent: true },
      // railfrog (ruby-toolbox DR64)
      { source: '/railfrog/:path*', destination: 'https://versiondude.net/projects/railfrog', permanent: true },
      // pellet (github-wiki DR45)
      { source: '/clark-parsia/:path*', destination: 'https://versiondude.net/projects/pellet', permanent: true },
      // bersirc (linuxsoft DR54)
      { source: '/terminal/:path*', destination: 'https://versiondude.net/projects/bersirc', permanent: true },
      // svn root (svn.haxx.se DR88) -> index projets
      { source: '/', has: [{ type: 'host', value: 'svn.versiondude.net' }], destination: 'https://versiondude.net/projects', permanent: true },
      // anciens slugs d'article v1 -> projet le plus proche (l'article dédié arrivera ensuite)
      { source: '/how-html-parsing-works', destination: 'https://versiondude.net/projects/html5-parser', permanent: true },
      { source: '/fr/comment-fonctionne-analyse-html', destination: 'https://versiondude.net/projects/html5-parser', permanent: true },
      { source: '/es/como-funciona-el-analisis-html', destination: 'https://versiondude.net/projects/html5-parser', permanent: true },
      // --- Host canonicalization: www + svn -> apex ---
      { source: '/:path*', has: [{ type: 'host', value: 'www.versiondude.net' }], destination: 'https://versiondude.net/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'svn.versiondude.net' }], destination: 'https://versiondude.net/:path*', permanent: true },
    ];
  },
};

module.exports = nextConfig;
