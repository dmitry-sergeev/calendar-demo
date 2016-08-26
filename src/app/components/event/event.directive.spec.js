/* global moment:false */
(function () {
  'use strict';

  /**
   * @todo Complete the test
   * This example is not perfect.
   * Test should check if MomentJS have been called
   */
  describe('directive event', function () {
    var vm;
    var el;
    var eventObject;

    beforeEach(module('calendarDemo'));
    beforeEach(inject(function ($compile, $rootScope, moment) {

      var $new = $rootScope.$new();
      eventObject = $new.eventObject = {
        name: 'event 1',
        startDate: moment('2016-08-25T10:00:00.000Z'),
        endDate: moment('2016-08-25T13:00:00.000Z')
      };

      el = angular.element('<div data-event="eventObject"></div>');

      $compile(el)($new);
      $rootScope.$digest();
      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function () {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object', function () {
      expect(vm).toEqual(jasmine.any(Object));
      expect(vm.event).toEqual(eventObject);
    });

    it('should have instanciate members', function () {
      expect(vm.event.startDate).toEqual(jasmine.any(moment));
      expect(vm.event.endDate).toEqual(jasmine.any(moment));
      expect(vm.event.name).toEqual(jasmine.any(String));
    });
  });
})();
