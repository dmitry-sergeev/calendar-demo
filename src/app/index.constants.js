/* global _:false, moment:false */
(function() {
  'use strict';

  angular
    .module('calendarDemo')
    .constant('cellHeight', 50)
    .constant('headerHeight', 20)
    .constant('moment', moment)
    .constant('_', _)
  ;

})();
