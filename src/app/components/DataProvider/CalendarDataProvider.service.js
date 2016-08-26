(function () {
  'use strict';

  angular
    .module('calendarDemo')
    .service('CalendarDataProvider', CalendarDataProvider);

  /** @ngInject */
  function CalendarDataProvider() {
    var data = [
      {
        name: 'event 1',
        startDate: '2016-08-25T10:00:00.000Z',
        endDate: '2016-08-25T13:00:00.000Z'
      },
      {
        name: 'event 2',
        startDate: '2016-08-25T12:00:00.000Z',
        endDate: '2016-08-25T15:30:00.000Z'
      },
      {
        name: 'event 3',
        startDate: '2016-08-25T09:00:00.000Z',
        endDate: '2016-08-25T11:00:00.000Z'
      },
      {
        name: 'event 4',
        startDate: '2016-08-26T15:00:00+03:00',
        endDate: '2016-08-26T15:30:00.000Z'
      },
      {
        name: 'OOO for dentist',
        startDate: '2016-08-27T3:00:00.000Z',
        endDate: '2016-08-27T15:00:00.000Z'
      },
      {
        name: 'engineering interview test prep',
        startDate: '2016-08-27T00:00:00.000Z',
        endDate: '2016-08-27T12:00:00.000Z'
      }];

    this.getCalendarData = getCalendarData;

    function getCalendarData() {
      return data;
    }
  }

})();
