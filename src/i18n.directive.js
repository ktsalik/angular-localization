angular
  .module('i18n')
  .directive('i18n', ['$rootScope', '$i18n', function($rootScope, $i18n) {
    return function(scope, element, attrs) {
      
      function applyLocal() {
        var translation = $i18n(attrs.i18n);
        element.text(translation);
      }
      
      applyLocal();
      
      $rootScope.$on('i18n.language:change', function() {
        applyLocal();
      });
      
    };
  }]);
