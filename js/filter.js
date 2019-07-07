'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var DEBOUNCE_INTERVAL = 500;

  // Функция генерации случайного цвета
  var getRandomColor = function (colors) {
    var randomColorIndex = Math.floor(Math.random() * colors.length);
    return colors[randomColorIndex];
  };

  var coatWizardElement = userDialog.querySelector('.wizard-coat');
  coatWizardElement.addEventListener('click', function () {
    var newColor = getRandomColor(WIZARD_COAT);
    coatWizardElement.style.fill = newColor;
    onCoatChange(newColor);
  });

  var eyesWizardElement = userDialog.querySelector('.wizard-eyes');
  eyesWizardElement.addEventListener('click', function () {
    var newColor = getRandomColor(WIZARD_EYES);
    eyesWizardElement.style.fill = newColor;
    onEyesChange(newColor);
  });

  var fireballWizardElement = userDialog.querySelector('.setup-fireball-wrap');
  fireballWizardElement.addEventListener('click', function () {
    var newColor = getRandomColor(WIZARD_FIREBALL);
    fireballWizardElement.style = 'background-color: ' + newColor;
  });

  var currentCoatColor;
  var currentEyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === currentCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === currentEyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    renderData(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  // Устранение дребезга
  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  var onEyesChange = debounce(function (color) {
    currentEyesColor = color;
    updateWizards();
  });

  var onCoatChange = debounce(function (color) {
    currentCoatColor = color;
    updateWizards();
  });

  // Callback для добавления метода отрисовки персонажей
  var renderData = null;
  var addMethod = function (method) {
    renderData = method;
  };

  // Метод отрисовки похожих персонажей
  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.filter = {
    init: addMethod,
    change: successHandler
  };
})();
