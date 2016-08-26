(function () {
  'use strict';

  angular
    .module('calendarDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $uibModal, moment, CalendarDataProvider) {
    var vm = this;
    vm.dayRange = 7;
    vm.startDate = moment().startOf('week');

    vm.subtractDay = function () {
      vm.startDate = vm.startDate.subtract(1, 'day');
    };

    vm.addDay = function () {
      vm.startDate = vm.startDate.add(1, 'day');
    };

    vm.setDayRange = function (i) {
      vm.dayRange = i;
    };

    vm.getDate = function (date, hour) {
      return vm.startDate.clone().add(date, 'day').add(hour, 'hour');
    };

    vm.getDateName = function (date, hour) {
      return vm.startDate.clone().add(date, 'day').add(hour, 'hour').format("DD/MM ha");
    };

    vm.addObject = function () {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/components/modal/addEvent.html',
        controller: 'addEventController',
        controllerAs: '$ctrl'
      });

      modalInstance.result.then(function (item) {
        vm.calendarData.push(item);
      });
    };

    activate();

    function activate() {
      getCalendarData();
    }

    function getCalendarData() {
      vm.calendarData = CalendarDataProvider.getCalendarData();

      angular.forEach(vm.calendarData, function (event) {
        event.startDate = moment(event.startDate);
        event.endDate = moment(event.endDate);
      });
    }
  }
})();
