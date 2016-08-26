(function () {
  'use strict';

  angular
    .module('calendarDemo')
    .filter('eventStyle', Filter);

  /** @ngInject */
  function Filter(_, cellHeight, headerHeight) {
    function countOverlaps(event, events) {
      return _.filter(events, function (item) {
        return event.startDate.isBetween(item.startDate, item.endDate) ||
          event.endDate.isBetween(item.startDate, item.endDate) ||
          (item.startDate.isBetween(event.startDate, event.endDate) && item.endDate.isBetween(event.startDate, event.endDate));
      });
    }

    function countOverlapsBefore(event, events) {
      return _.filter(events, function (item) {
        return event.startDate.isBetween(item.startDate, item.endDate);
      });
    }

    return function (event, calendarData) {
      var overlaps = countOverlaps(event, calendarData).length + 1;
      var overlapsBefore = countOverlapsBefore(event, calendarData).length;
      return {
        top: Math.round(event.startDate.hour() * cellHeight + headerHeight + event.startDate.minutes() * cellHeight / 60) + 'px',
        width: 100 / overlaps + '%',
        left: 100 / overlaps * overlapsBefore + '%',
        height: Math.round(event.endDate.diff(event.startDate, 'minutes') * cellHeight / 60) + 'px'
      }
    }
  }
})();
