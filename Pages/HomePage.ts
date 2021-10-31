import { browser, element, by, protractor } from "protractor"
export class HomePage{
   
    CustomerName :string = "LivingPackets";
    VerifyPageOpen (){
        browser.waitForAngularEnabled(false);
        browser.get("http://localhost:8080/");
        browser.waitForAngular();
        expect(browser.getTitle()).toContain("TEST");
        
        
    }
   PageElement (){
    
       expect(element(by.css("#react-node > div > div.style__component___2y-SF > div.style__logo___39Ttf")).isPresent());
       expect(element(by.css("#react-node > div > div.style__component___2y-SF > div.style__items___3L7Td > div:nth-child(1)")).getText()).toContain("SHOW CUSTOMERS");
       expect(element(by.css("#react-node > div > div.style__component___2y-SF > div.style__items___3L7Td > div:nth-child(2)")).getText()).toContain("ADD CUSTOMER");
       

   }  
   CreateCustomer () {
    element(by.css("#react-node > div > div.style__component___2y-SF > div.style__items___3L7Td > div:nth-child(2)")).click();
    element(by.css("#react-node > div > div:nth-child(2) > div:nth-child(1) > input")).sendKeys(this.CustomerName);
    var Industry = element.all(by.tagName('option')).get(1);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(Industry), 5000);
    Industry.click();
    element(by.css("#react-node > div > div:nth-child(2) > div:nth-child(3) > input")).click();
    element(by.className("style__textarea___1Ye9K")).sendKeys("Testing of Adding new Customer");
    element(by.css("#react-node > div > div:nth-child(2) > div:nth-child(6) > div")).click();
   
   }
   EditCustomer () {
    expect(element(by.css("#react-node > div > div.style__component___1CRQW > div:nth-child(19) > div.style__name___1HNGn")).getText()).toContain(this.CustomerName);
     element(by.css("#react-node > div > div.style__component___1CRQW > div:nth-child(19) > div.style__icons___1cOUd > div:nth-child(1) > svg")).click();
    
     var Industry = element.all(by.tagName('option')).get(2);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(Industry), 5000);
    Industry.click();
    element(by.css("#react-node > div > div:nth-child(2) > div:nth-child(6) > div")).click();
     
   }
  FilterCustomer () {
      element.all(by.tagName("option")).get(2).click();
      browser.sleep(5000); 
  }
  DeleteCustomer () {
    element(by.css("#react-node > div > div.style__component___1CRQW > div:nth-child(19) > div.style__icons___1cOUd > div:nth-child(2)"));
    browser.sleep(5000); 
}

}