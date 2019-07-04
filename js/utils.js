'use strict';

(function () {

  var addError = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('error-message');

    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  var clearErrors = function () {
    var error = document.querySelector('.error-message');
    if (error) {
      error.remove();
    }
  };

  window.utils = {
    addError: addError,
    clearErrors: clearErrors
  };
})();
