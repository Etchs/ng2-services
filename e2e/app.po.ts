import { browser, element, by } from 'protractor';

export class Ng2ServicesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('he-root h1')).getText();
  }
}
