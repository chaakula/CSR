import { CSRPage } from './app.po';

describe('csr App', () => {
  let page: CSRPage;

  beforeEach(() => {
    page = new CSRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
