"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
var protractor_1 = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.CustomerName = "LivingPackets";
    }
    HomePage.prototype.VerifyPageOpen = function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("http://localhost:8080/");
        protractor_1.browser.waitForAngular();
        expect(protractor_1.browser.getTitle()).toContain("TEST");
    };
    HomePage.prototype.PageElement = function () {
        expect((0, protractor_1.element)(protractor_1.by.css("#react-node > div > div.style__component___2y-SF > div.style__logo___39Ttf")).isPresent());
        expect((0, protractor_1.element)(protractor_1.by.css("#react-node > div > div.style__component___2y-SF > div.style__items___3L7Td > div:nth-child(1)")).getText()).toContain("SHOW CUSTOMERS");
        expect((0, protractor_1.element)(protractor_1.by.css("#react-node > div > div.style__component___2y-SF > div.style__items___3L7Td > div:nth-child(2)")).getText()).toContain("ADD CUSTOMER");
    };
    HomePage.prototype.CreateCustomer = function () {
        (0, protractor_1.element)(protractor_1.by.css("#react-node > div > div.style__component___2y-SF > div.style__items___3L7Td > div:nth-child(2)")).click();
        (0, protractor_1.element)(protractor_1.by.css("#react-node > div > div:nth-child(2) > div:nth-child(1) > input")).sendKeys(this.CustomerName);
        var Industry = protractor_1.element.all(protractor_1.by.tagName('option')).get(1);
        var EC = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.visibilityOf(Industry), 5000);
        Industry.click();
        (0, protractor_1.element)(protractor_1.by.css("#react-node > div > div:nth-child(2) > div:nth-child(3) > input")).click();
        (0, protractor_1.element)(protractor_1.by.className("style__textarea___1Ye9K")).sendKeys("Testing of Adding new Customer");
        (0, protractor_1.element)(protractor_1.by.css("#react-node > div > div:nth-child(2) > div:nth-child(6) > div")).click();
    };
    HomePage.prototype.EditCustomer = function () {
        expect((0, protractor_1.element)(protractor_1.by.css("#react-node > div > div.style__component___1CRQW > div:nth-child(19) > div.style__name___1HNGn")).getText()).toContain(this.CustomerName);
        (0, protractor_1.element)(protractor_1.by.css("#react-node > div > div.style__component___1CRQW > div:nth-child(19) > div.style__icons___1cOUd > div:nth-child(1) > svg")).click();
        var Industry = protractor_1.element.all(protractor_1.by.tagName('option')).get(2);
        var EC = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.visibilityOf(Industry), 5000);
        Industry.click();
        (0, protractor_1.element)(protractor_1.by.css("#react-node > div > div:nth-child(2) > div:nth-child(6) > div")).click();
    };
    HomePage.prototype.FilterCustomer = function () {
        protractor_1.element.all(protractor_1.by.tagName("option")).get(2).click();
        protractor_1.browser.sleep(5000);
    };
    HomePage.prototype.DeleteCustomer = function () {
        (0, protractor_1.element)(protractor_1.by.css("#react-node > div > div.style__component___1CRQW > div:nth-child(19) > div.style__icons___1cOUd > div:nth-child(2)"));
        protractor_1.browser.sleep(5000);
    };
    return HomePage;
}());
exports.HomePage = HomePage;
