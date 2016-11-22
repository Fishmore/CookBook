import { browser, element, by } from 'protractor';

export class CookbookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cb-root h1')).getText();
  }
}
