angular
  .module('i18n', [])


angular
  .module('i18n')
  .provider('$i18n', i18n);

function i18n() {
  
  this.language = {
    name: '',
    code: '',
    translations: {},
    settings: {
      path: '',
      prefix: '',
      type: ''
    }
  };
  
  this.config = function(settings) {
    this.language.code = settings.language || '';
    this.language.settings.path = settings.path || '';
    this.language.settings.prefix = settings.prefix || '';
    this.language.settings.type = settings.type || '';
  };
  
  this.$get = ['$http', '$rootScope', function($http, $rootScope) {
    var provider = this;
    
    var i18n = function(translation) {
      return provider.language.translations[translation] || '';
    };
    
    i18n.language = provider.language;
    
    i18n.set = function(languageCode) {
      var path = '';
      path += provider.language.settings.path ? provider.language.settings.path + '/' : '';
      path += provider.language.settings.prefix ? provider.language.settings.prefix + '.' : '';
      path += languageCode;
      path += provider.language.settings.type ? '.' + provider.language.settings.type : '';
      $http.get(path, { cache: true }).then(function(response) {
          provider.language.name = response.data.name;
          provider.language.code = languageCode;
          provider.language.translations = response.data.translations
          $rootScope.$emit('i18n.language:change');
        });
    };
    
    if (provider.language.code) {
      i18n.set(provider.language.code);
    }
    
    return i18n;
  }];
}

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
