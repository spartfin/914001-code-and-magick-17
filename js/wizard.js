'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.WIZARD_COAT = WIZARD_COAT;
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  window.WIZARD_EYES = WIZARD_EYES;
  var WIZARD_FAREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  window.WIZARD_FAREBALL = WIZARD_FAREBALL;
  var fragment = document.createDocumentFragment();
  var wizards = [];

  var getRandom = function (n) {
    return Math.floor(Math.random() * n);
  };
  window.getRandom = getRandom;

  var insideWizard = function (names, surnames, coatColors, eyesColors) {
    return {
      name: names[getRandom(8)] + ' ' + surnames[getRandom(8)],
      coatColor: coatColors[getRandom(6)],
      eyesColor: eyesColors[getRandom(5)]
    };
  };

  var createWizard = function (wizard, parendElement) {
    var wizardElement = parendElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  for (var i = 0; i < 4; i++) {
    wizards[i] = insideWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT, WIZARD_EYES);
    fragment.appendChild(createWizard(wizards[i], similarWizardTemplate));
  }

  similarList.appendChild(fragment);
})();
