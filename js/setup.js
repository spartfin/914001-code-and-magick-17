'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var fragment = document.createDocumentFragment();
var wizards = [];

var getRandom = function (n) {
  return Math.floor(Math.random() * n);
};

var insideWizard = function (names, surnames, coatColors, eyesColors) {
  var wizard = {
    name: names[getRandom(8)] + ' ' + surnames[getRandom(8)],
    coatColor: coatColors[getRandom(6)],
    eyesColor: eyesColors[getRandom(5)]
  };
  return wizard;
};

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  fragment.appendChild(wizardElement);
};

for (var i = 0; i < 4; i++) {
  wizards[i] = insideWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT, WIZARD_EYES);
  createWizard(wizards[i]);
}

similarList.appendChild(fragment);
