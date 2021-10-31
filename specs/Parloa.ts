import { browser, element, by, protractor } from "protractor"


import { HomePage } from "../Pages/HomePage";

describe('UI Automation testing of Parloa Application', function(){
  let openBasePage = new HomePage();

  beforeEach(function () {
    browser.waitForAngularEnabled(false);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  })
  /* Verify Home page is loaded successfully */
  it('Verify Page Load successfull',function(){ 
    openBasePage.VerifyPageOpen();
  })
  it('Verify Page Element Present on page',function(){ 
    openBasePage.PageElement();
  }) 
  it('Create Customer',function(){ 
    openBasePage.CreateCustomer();
  })  
  it('Edit Customer',function(){ 
    openBasePage.EditCustomer();
  }) 
  it('Filter Customer',function(){ 
    openBasePage.FilterCustomer();
  }) 
  it('Delete Customer',function(){ 
    openBasePage.DeleteCustomer();
  })  

});