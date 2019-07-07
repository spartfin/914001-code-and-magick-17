'use strict';

(function () {
  window.filter.init(window.wizard.render);

  document.addEventListener('DOMContentLoaded', function () {
    window.backend.load(window.filter.change, window.error.add);
    document.querySelector('.setup').querySelector('.setup-similar').classList.remove('hidden');

    window.dialog.save(window.backend.save, window.error.add);
  });
})();
