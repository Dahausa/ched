import { ChedPage } from './app.po';

describe('ched App', () => {
  let page: ChedPage;

  beforeEach(() => {
    page = new ChedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
