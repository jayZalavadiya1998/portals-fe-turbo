export const commonRegex={
    emailRegex : new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ),
    phoneRegex:new RegExp(/^[0-9 ()+-]+$/),
    zipRegex:  new RegExp(/(^\d{4,5}$)|(^\d{5}-\d{4}$)/),
    onlyDigitRegex: new RegExp(/(\.*)\./),
    positiveNumeric: new RegExp(/^\d*[1-9]\d*$/),
    shouldNotStartWithZeroRegex: new RegExp(/^[a-zA-Z0-9]/),
    shouldNotStartWithSpaceRegex: new RegExp(/^\s/),
}