'use strict';

(function () {

// меняем цвет плаща
  var wizardCoat = window.setup.querySelector('.wizard-coat');
  var coatColorInput = window.setup.querySelector('input[name = coat-color]');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.WIZARD_COAT[window.getRandom(6)];
    coatColorInput.value = wizardCoat.style.fill;
  });

  // меняем цвет глаз и пробую чуть другой вариант кода
  var wizardEyes = window.setup.querySelector('.wizard-eyes');
  var eyesColorInput = window.setup.querySelector('input[name = eyes-color]');

  var eyesClickHeandler = function () {
    var randomColor = window.WIZARD_EYES[window.getRandom(5)];
    wizardEyes.style.fill = randomColor;
    eyesColorInput.value = randomColor;
    return;
  };
  wizardEyes.addEventListener('click', eyesClickHeandler);

  // меняем цвет шара
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');
  var fireballColorInput = window.setup.querySelector('input[name = fireball-color]');

  var fireballClickHeandler = function () {
    var randomColor = window.WIZARD_FAREBALL[window.getRandom(5)];
    wizardFireball.style.background = randomColor;
    fireballColorInput.value = randomColor;
    return;
  };
  wizardFireball.addEventListener('click', fireballClickHeandler);
})();
