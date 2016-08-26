(function () {
  'use strict';

  angular
    .module('calendarDemo')
    .filter('range', Filter);

  /** @ngInject */
  function Filter(_) {
    return function (to, from) {
      return _.range(from || 0, to);
    }
  }
})();
