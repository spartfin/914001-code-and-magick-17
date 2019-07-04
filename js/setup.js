'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  window.setup = setup;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');
  var setupWizardForm = setup.querySelector('.setup-wizard-form');
  var setupSubmit = setup.querySelector('.setup-submit');

  var onPopupEscPress = function (evt) {
    if (userName === document.activeElement) {
      return evt;
    } else {
      if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
      }
    }
    return evt;
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  var formSubmitHandler = function (evt) {
    evt.preventDefault();

    window.backend.save(new FormData(setupWizardForm), closePopup, window.utils.addError);
  };

  setupSubmit.addEventListener('click', formSubmitHandler);
})();
