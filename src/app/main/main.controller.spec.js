(function () {
  'use strict';

  describe('controllers', function () {
    var vm;
    var CalendarDataProvider;
    var moment;

    beforeEach(module('calendarDemo'));
    beforeEach(inject(function (_$controller_, _CalendarDataProvider_, _moment_) {
      spyOn(_CalendarDataProvider_, 'getCalendarData').and.returnValue([{
        name: 'event 1',
        startDate: '2016-08-25T10:00:00.000Z',
        endDate: '2016-08-25T13:00:00.000Z'
      }]);

      vm = _$controller_('MainController');
      CalendarDataProvider = _CalendarDataProvider_;
      moment = _moment_;
    }));

    it('should have a timestamp creation date', function () {
      expect(vm.startDate).toEqual(jasmine.any(moment));
    });

    it('should call CalendarDataProvider.getCalendarData', function () {
      expect(CalendarDataProvider.getCalendarData).toHaveBeenCalled();
    });

    it('should define one calendar event', function () {
      expect(angular.isArray(vm.calendarData)).toBeTruthy();
      expect(vm.calendarData.length === 1).toBeTruthy();
    });
  });
})();
