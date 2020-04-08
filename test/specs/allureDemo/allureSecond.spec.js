const expect=require('chai').expect;
const allureReporter=require('@wdio/allure-reporter').default;

describe('Check Allure report', () => {
    it('Test-1:Failed Test ', () => {
      expect(true).to.be.false;
     
    });
  
    it('Test-2: Passed Test ', () => {
      expect(true).to.be.true;
      
    });
  
    it.skip('Test-3: Skipped Test ', () => {
      expect(true).to.be.false;
     
    });
  
});
  