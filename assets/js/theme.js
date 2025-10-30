// File: assets/js/theme.js
(function () {
  var DOC = document.documentElement;
  var MEDIA = window.matchMedia('(prefers-color-scheme: dark)');
  var THEME_KEY = 'theme';
  var SOURCE_KEY = 'themeSource'; // 'user' | 'system'

  function getTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      var source = localStorage.getItem(SOURCE_KEY) || (saved ? 'user' : 'system');
      var sys = MEDIA.matches ? 'dark' : 'light';
      return { theme: saved || sys, source: source };
    } catch (_) {
      return { theme: MEDIA.matches ? 'dark' : 'light', source: 'system' };
    }
  }

  function setTheme(theme, source) {
    DOC.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
      localStorage.setItem(SOURCE_KEY, source);
    } catch (_) {}
    updateToggleUI(theme);
  }

  function toggleTheme() {
    var cur = DOC.getAttribute('data-theme') || 'light';
    setTheme(cur === 'dark' ? 'light' : 'dark', 'user');
  }

  function updateToggleUI(theme) {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    var isDark = theme === 'dark';
    btn.textContent = isDark ? 'Light' : 'Dark';
    btn.setAttribute('aria-pressed', String(isDark));
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.title = btn.getAttribute('aria-label');
  }

  // Init when DOM is ready (handles your existing button at page bottom)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    var state = getTheme();
    setTheme(state.theme, state.source);

    var btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', toggleTheme);

    document.addEventListener('keydown', function (e) {
      if (e.key && e.key.toLowerCase() === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        toggleTheme();
      }
    });

    MEDIA.addEventListener('change', function (e) {
      try {
        var source = localStorage.getItem(SOURCE_KEY);
        if (source !== 'user') setTheme(e.matches ? 'dark' : 'light', 'system');
      } catch (_) {
        setTheme(e.matches ? 'dark' : 'light', 'system');
      }
    });
  }
})();
