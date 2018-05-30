var windowActive = true;
var favicon = document.querySelector('link[rel="icon"]');

(function () {

  window.onfocus = function () {
    windowActive = true;
    favicon.setAttribute('href', 'favicon.ico');
  };

  window.onblur = function () {
    windowActive = false;
  };

})();

