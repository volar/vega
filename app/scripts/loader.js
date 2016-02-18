'use strict';

//guidelines
//No globals 
//expose a global var if you need so
// make the contract explicit by asking for a DOM node 
//within which you will make the modifications, 
//so that the developer of the page knows what to expect.



(function (window, document) {
  var loader = function () {
    var script = document.createElement('script'), tag = document.getElementsByTagName('script')[0];
    script.src = 'http://localhost:3000/dist/formWidget.js';
    tag.parentNode.insertBefore(script, tag);
  };

  // Wait until window.onload before downloading any more code.
  window.addEventListener ? window.addEventListener('load', loader, false) : window.attachEvent('onload', loader);
})(window, document);