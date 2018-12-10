/* global $ */

var Logo = {
  init: function() {
    const image = document.querySelector('.js-image');

    image.addEventListener('click', function() {
      image.classList.add('--open');
    });
  }
};

Logo.init();
