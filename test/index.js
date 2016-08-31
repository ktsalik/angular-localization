angular
  .module('testApp', [
    'i18n'
  ])
  .config(['$i18nProvider', function($i18nProvider) {
    $i18nProvider.config({
      language: 'en',
      type: 'json',
    });
  }])
  .controller('testController', ['$i18n', '$rootScope', '$timeout', function($i18n, $rootScope, $timeout) {
    var vm = this;
    
    vm.setLanguage = function(languageCode) {
      $i18n.set(languageCode);
    };
    
  }]);
