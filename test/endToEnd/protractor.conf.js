'use strict';
/* global by, browser */
// An example configuration file.
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'mocha',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['**/*.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }

    /* If your app needs to login first */
    // onPrepare: function(){
    //     browser.driver.get('http://localhost:8080/login');

    //     browser.driver.findElement(by.id('email')).sendKeys('me@here.now');
    //     browser.driver.findElement(by.id('password')).sendKeys('password');
    //     browser.driver.findElement(by.id('submit')).click();

    //     browser.driver.wait(function(){
    //         return browser.driver.getCurrentUrl().then(function(url){
    //             return (/app/).test(url); // regex
    //         });
    //     });
    // }
};
