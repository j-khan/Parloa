"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HomePage_1 = require("../Pages/HomePage");
describe('UI Automation testing of Parloa Application', function () {
    var openBasePage = new HomePage_1.HomePage();
    beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    /* Verify Home page is loaded successfully */
    it('Verify Page Load successfull', function () {
        openBasePage.VerifyPageOpen();
    });
    it('Verify Page Element Present on page', function () {
        openBasePage.PageElement();
    });
    it('Create Customer', function () {
        openBasePage.CreateCustomer();
    });
    it('Edit Customer', function () {
        openBasePage.EditCustomer();
    });
    it('Filter Customer', function () {
        openBasePage.FilterCustomer();
    });
    it('Delete Customer', function () {
        openBasePage.DeleteCustomer();
    });
});
