'use strict';

(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var similarList = document.querySelector('.setup-similar-list');

  var addWizard = function (data) {
    if (data.length > 4) {
      data.length = 4;
      similarList.textContent = '';
      for (var i = 0; i < 4; i++) {
        similarList.appendChild(createWizard(data[i]));
      }
    }
  };

  window.wizard = {
    render: addWizard
  };
})();
