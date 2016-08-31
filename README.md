# Angular-localization

Angular localization library. Makes it easy to manage languages for your website.

## Installation
### Using npm
````bash
$ npm install angular-localization
````

## Usage
### [Live Example](https://embed.plnkr.co/uQedPz/)
Inject the library
````javascript
angular
  .module('yourApp', [
    'i18n'
  ])
````
Configurate the library
````javascript
angular
  .module('yourApp')
  .config(['$i18nProvider', function($i18nProvider) {
    
    // assuming assets/locals/en.json exists
    
    $i18nProvider.config({
      language: 'en', // default language
      path: 'path/to/your/files', // for example: assets/locals
      type: 'json', // type of your translations files
    });
    
  }])
````
Example translation file ````assets/locals/en.json````
````json
{
  "name": "english",
  "translations": {
    "foo": "bar",
    "baz": "qux"
  }
}
````
Using the **directive**
````html
<span i18n="foo"></span>
````
Using the **provider** inside a controller
````javascript
angular
  .module('yourApp')
  .controller('yourController', ['$i18n', function($i18n) {
    var vm = this;
    
    vm.foo = $i18n('bar');
  }])
````
and then just
````html
<body ng-app="yourApp">
  <div ng-controller="yourController as ctrl">
    <span>{{ctrl.foo}}</span>
  </div>
</body>
````
Changing language
````javascript
angular
  .module('yourApp')
  .controller('yourController', ['$i18n', function($i18n) {
    $i18n.set('el');
  }])
````

## Documentation
*(work in progress)*