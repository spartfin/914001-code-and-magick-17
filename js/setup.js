'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
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
var WIZARD_FAREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var fragment = document.createDocumentFragment();
var wizards = [];

var getRandom = function (n) {
  return Math.floor(Math.random() * n);
};

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

// меняем цвет плаща
var wizardCoat = setup.querySelector('.wizard-coat');
var coatColorInput = setup.querySelector('input[name = coat-color]');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = WIZARD_COAT[getRandom(6)];
  coatColorInput.value = wizardCoat.style.fill;
});

// меняем цвет глаз и пробую чуть другой вариант кода
var wizardEyes = setup.querySelector('.wizard-eyes');
var eyesColorInput = setup.querySelector('input[name = eyes-color]');

var eyesClickHeandler = function () {
  var randomColor = WIZARD_EYES[getRandom(5)];
  wizardEyes.style.fill = randomColor;
  eyesColorInput.value = randomColor;
  return;
};
wizardEyes.addEventListener('click', eyesClickHeandler);

// меняем цвет шара
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var fireballColorInput = setup.querySelector('input[name = fireball-color]');

var fireballClickHeandler = function () {
  var randomColor = WIZARD_FAREBALL[getRandom(5)];
  wizardFireball.style.background = randomColor;
  fireballColorInput.value = randomColor;
  return;
};
wizardFireball.addEventListener('click', fireballClickHeandler);
