angular.module("ng-phone", [])
.filter('phone', ['ngPhone', function (ngPhone) {
  return function (number, format, country) {
    if (!number) {
      return '';
    }

    return ngPhone.format(number, country, format);
  }
}])
.service("ngPhone", function() {

__COMPILED_CLOSURE__

var PhoneNumberFormat = i18n.phonenumbers.PhoneNumberFormat;
function getFormat(how) {
  how = how ? how.toLowerCase() : 'e164';
  switch (how) {
  case 'international':
  case 'intl':
  case 'global':
      return PhoneNumberFormat.INTERNATIONAL;

  case 'national':
  case 'local':
      return PhoneNumberFormat.NATIONAL;

  case 'rfc3966':
  case 'url':
      return PhoneNumberFormat.RFC3966;

  case 'e164':
      return PhoneNumberFormat.E164;

  default:
      return null;
  }
}

var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
function format(phone, countryCode, how) {
  try {
    if (countryCode && countryCode.length > 2) {
      how = countryCode;
      countryCode = undefined;
    }

    var phone_number = phoneUtil.parseAndKeepRawInput(phone, countryCode);
    var fmt = getFormat(how);
    return fmt === null ? null : phoneUtil.format(phone_number, fmt);
  } catch (ex) {
    return null;
  }
}


return {
  format: format,
  countryForE164Number: countryForE164Number, // phone
  formatNumberForMobileDialing: formatNumberForMobileDialing, // country, phone
  isValidNumber: isValidNumber, // phone, country
  formatE164: formatE164, // country, phone
  formatInternational: formatInternational, // country, phone
  formatLocal: formatLocal, // country, phone
  cleanPhone: cleanPhone, // phone
  countryCodeToName: countryCodeToName, // country
  getNumberType: getNumberType, // phone, country
};

});
