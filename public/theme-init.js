/* No-flash theme init: applies saved/preferred color scheme before first paint. */
(function () {
  try {
    var t = localStorage.getItem('vd-theme');
    var dark = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
