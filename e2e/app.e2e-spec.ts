import { CSRDemoPage } from './app.po';

describe('csrdemo App', function() {
  let page: CSRDemoPage;

  beforeEach(() => {
    page = new CSRDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
