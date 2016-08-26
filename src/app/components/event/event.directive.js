(function () {
  'use strict';

  angular
    .module('calendarDemo')
    .directive('event', eventDirective);

  /** @ngInject */
  function eventDirective() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/event/event.html',
      scope: {
        event: '='
      },
      controller: EventController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function EventController() {
    }
  }

})();
