(function () {
  'use strict';

  angular
    .module('calendarDemo')
    .filter('moment', Filter);

  /** @ngInject */
  function Filter(moment) {
    return function (day, format) {
      return moment(day).format(format);
    }
  }
})();
