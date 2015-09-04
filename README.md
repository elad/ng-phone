# ng-phone

Angular service/filter for phone number validation/display.

## Install

Type:

```
bower install ngPhone
```

Include the script:

```html
<script src="bower_components/ng-phone/ng-phone.js"></script>
```

Add a depencency:

```js
var myApp = angular.module('myApp', ['ngPhone']);
```

## Use

As a **service**:

```js
myApp.controller('myController', function ($scope, ngPhone) {
  $scope.phone = '+12125556666';
  
  // Format
  var formattedPhone = ngPhone.format($scope.phone, 'local', 'US');
  
  // Validate
  var isValid = ngPhone.isValidNumber($scope.phone, 'US');
});
```

See [elad/libphonenumber](https://github.com/elad/libphonenumber) for more **format()** examples.

As a **filter**:

```html
<div>
  {{ phone | phone:'local' }}
  {{ phone | phone:'local':'US' }}
</div>
```

Behaves exactly like **filter()**.

## Update

To sync with the latest version of `libphonenumber`, type:

```
./build.sh
```
