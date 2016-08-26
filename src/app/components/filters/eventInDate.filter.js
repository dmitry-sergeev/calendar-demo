(function () {
  'use strict';

  angular
    .module('calendarDemo')
    .filter('eventInDate', Filter);

  /** @ngInject */
  function Filter(_) {
    return function (calendarData, startDate, date) {
      var momentDate = startDate.clone().add(date, 'day');
      var momentNextDate = startDate.clone().add(date + 1, 'day');
      return _.filter(calendarData, function (item) {
        return (item.startDate >= momentDate && item.startDate < momentNextDate) ||
          (item.endDate >= momentDate && item.endDate < momentNextDate);
      })
    }
  }
})();
