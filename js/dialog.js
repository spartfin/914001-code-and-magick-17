'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  window.setup = setup;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');

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

  // перетаскиваем предмет из магазина в рюкзак
  var dragged;

  setup.addEventListener('dragstart', function (evt) {
    dragged = evt.target;
  }, false);

  setup.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  }, false);

  setup.addEventListener('drop', function (evt) {
    evt.preventDefault();
    if (evt.target.className === 'setup-artifacts-cell') {
      dragged.parentNode.removeChild(dragged);
      evt.target.appendChild(dragged);
    }
  }, false);

  // Отправка формы
  var form = setup.querySelector('.setup-wizard-form');

  var submitForm = function (callback, onError) {
    form.addEventListener('submit', function (evt) {
      callback(new FormData(form), function () {
        setup.classList.add('hidden');
      }, onError);
      evt.preventDefault();
    });
  };

  window.dialog = {
    save: submitForm
  };
})();
