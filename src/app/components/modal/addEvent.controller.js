(function () {
  'use strict';

  angular
    .module('calendarDemo')
    .controller('addEventController', AddEventController);

  /** @ngInject */
  function AddEventController($uibModalInstance, moment) {
    var vm = this;
    vm.event = {
      startDate: new Date(moment()),
      endDate: new Date(moment().add(1, 'hour'))
    };

    vm.ok = function () {
      vm.errors = [];
      vm.event.startDate = moment(vm.event.startDate);
      vm.event.endDate = moment(vm.event.endDate);
      if (!vm.event.startDate.isValid()) {
        vm.errors.push('not valid start date');
      }
      if (!vm.event.endDate.isValid()) {
        vm.errors.push('not valid end date');
      }
      if (vm.errors.length) {
        return;
      }
      $uibModalInstance.close({
        name: vm.event.name || '',
        startDate: vm.event.startDate,
        endDate: vm.event.endDate
      });
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
